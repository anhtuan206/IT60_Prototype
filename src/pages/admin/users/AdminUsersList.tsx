import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import FilterBar from '../../../components/admin/FilterBar';
import StatusBadge from '../../../components/admin/StatusBadge';
import ConfirmModal from '../../../components/admin/ConfirmModal';
import { Edit, Trash2, UserPlus } from 'lucide-react';

const AdminUsersList = () => {
  const breadcrumbs = [
    { label: 'Trang chủ', path: '/admin' },
    { label: 'Người dùng', path: '/admin/users' },
  ];

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Mock data based on README
  const users = [
    { id: '#U-001', name: 'Nguyễn Văn An', email: 'nguyenvana@email.com', role: 'customer', status: 'active', created: '20/09/2025' },
    { id: '#U-002', name: 'Trần Thị Bích', email: 'tranthibich@email.com', role: 'customer', status: 'active', created: '18/09/2025' },
    { id: '#U-003', name: 'Lê Hoàng (Admin)', email: 'lehoang.admin@pethotel.com', role: 'admin', status: 'active', created: '15/09/2025' },
    { id: '#U-004', name: 'Phạm Minh (Staff)', email: 'phamminh.staff@pethotel.com', role: 'staff', status: 'disabled', created: '12/09/2025' },
    { id: '#U-005', name: 'Vũ Thị Lan', email: 'vuthilan@email.com', role: 'customer', status: 'active', created: '10/09/2025' },
  ];

  const columns = [
    { header: 'User ID', accessor: 'id' },
    { header: 'Tên', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Vai trò', accessor: 'role', render: (value: string) => <StatusBadge status={value as any} /> },
    { header: 'Trạng thái', accessor: 'status', render: (value: string) => <StatusBadge status={value as any} /> },
    { header: 'Ngày tạo', accessor: 'created' },
    {
      header: 'Thao tác',
      accessor: 'actions',
      render: (_: any, row: any) => (
        <div className="flex space-x-2">
          <Link to={`/admin/users/edit/${row.id.replace('#U-', '')}`} className="p-1 hover:bg-gray-100 rounded">
            <Edit size={16} />
          </Link>
          <button
            className="p-1 hover:bg-gray-100 rounded text-gray-500"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedUser(row);
              setDeleteModalOpen(true);
            }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const handleRowSelect = (row: any) => {
    if (selectedRows.find(r => r.id === row.id)) {
      setSelectedRows(selectedRows.filter(r => r.id !== row.id));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === users.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users);
    }
  };

  const handleDelete = () => {
    console.log('Deleting user:', selectedUser);
    setDeleteModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <AdminLayout title="Người dùng" breadcrumbs={breadcrumbs}>
      <FilterBar searchPlaceholder="Tìm người dùng...">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả vai trò</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="customer">Customer</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="disabled">Vô hiệu hóa</option>
        </select>
      </FilterBar>

      <div className="mb-4">
        <Link to="/admin/users/new" className="inline-flex items-center bg-primary-blue text-white px-4 py-2 rounded-md hover:opacity-90">
          <UserPlus size={16} className="mr-2" />
          Thêm Người Dùng
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={users}
        selectable
        selectedRows={selectedRows}
        onSelectRow={handleRowSelect}
        onSelectAll={handleSelectAll}
        onRowClick={(row) => {
          window.location.href = `/admin/users/edit/${row.id.replace('#U-', '')}`;
        }}
      />

      {selectedRows.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-300 rounded-lg p-3 flex items-center space-x-4">
          <span className="text-sm font-medium">{selectedRows.length} mục đã chọn</span>
          <button className="px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
            Xóa đã chọn
          </button>
          <button className="px-3 py-2 text-sm bg-primary-blue text-white rounded-md hover:opacity-90">
            Thay đổi trạng thái
          </button>
        </div>
      )}

      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Xác nhận xóa"
        message={`Bạn có chắc chắn muốn xóa người dùng "${selectedUser?.name || ''}"?`}
      />
    </AdminLayout>
  );
};

export default AdminUsersList;
