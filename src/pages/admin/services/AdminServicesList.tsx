import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import FilterBar from '../../../components/admin/FilterBar';
import StatusBadge from '../../../components/admin/StatusBadge';
import ConfirmModal from '../../../components/admin/ConfirmModal';
import { Edit, Trash2, Plus } from 'lucide-react';
const AdminServicesList = () => {
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Dịch vụ',
    path: '/admin/services'
  }];
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  // Mock data
  const services = [{
    id: 1,
    name: 'Lưu trú cao cấp',
    type: 'Lưu trú',
    price: '350.000₫',
    status: 'active',
    updated: '15/06/2023'
  }, {
    id: 2,
    name: 'Cắt tỉa lông',
    type: 'Làm đẹp',
    price: '250.000₫',
    status: 'active',
    updated: '10/06/2023'
  }, {
    id: 3,
    name: 'Tắm và vệ sinh',
    type: 'Làm đẹp',
    price: '180.000₫',
    status: 'active',
    updated: '05/06/2023'
  }, {
    id: 4,
    name: 'Dịch vụ spa',
    type: 'Spa',
    price: '450.000₫',
    status: 'draft',
    updated: '01/06/2023'
  }, {
    id: 5,
    name: 'Dịch vụ đào tạo',
    type: 'Đào tạo',
    price: '550.000₫',
    status: 'draft',
    updated: '28/05/2023'
  }];
  const columns = [{
    header: 'ID',
    accessor: 'id'
  }, {
    header: 'Tên dịch vụ',
    accessor: 'name'
  }, {
    header: 'Loại',
    accessor: 'type'
  }, {
    header: 'Giá',
    accessor: 'price'
  }, {
    header: 'Trạng thái',
    accessor: 'status',
    render: (value: string) => <StatusBadge status={value as any} />
  }, {
    header: 'Cập nhật',
    accessor: 'updated'
  }, {
    header: 'Thao tác',
    accessor: 'actions',
    render: (_: any, row: any) => <div className="flex space-x-2">
          <Link to={`/admin/services/edit/${row.id}`} className="p-1 hover:bg-gray-100 rounded">
            <Edit size={16} />
          </Link>
          <button className="p-1 hover:bg-gray-100 rounded text-gray-500" onClick={e => {
        e.stopPropagation();
        setSelectedService(row);
        setDeleteModalOpen(true);
      }}>
            <Trash2 size={16} />
          </button>
        </div>
  }];
  const handleRowSelect = (row: any) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter(r => r !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };
  const handleSelectAll = () => {
    if (selectedRows.length === services.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...services]);
    }
  };
  const handleDelete = () => {
    // Handle delete logic
    setDeleteModalOpen(false);
    setSelectedService(null);
  };
  return <AdminLayout title="Dịch Vụ" breadcrumbs={breadcrumbs}>
      <FilterBar searchPlaceholder="Tìm dịch vụ...">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả loại</option>
          <option value="stay">Lưu trú</option>
          <option value="grooming">Làm đẹp</option>
          <option value="spa">Spa</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="draft">Bản nháp</option>
        </select>
      </FilterBar>
      <div className="mb-4">
        <Link to="/admin/services/new" className="inline-flex items-center bg-amber-700 text-white px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={16} className="mr-2" />
          Thêm Dịch Vụ
        </Link>
      </div>
      <DataTable columns={columns} data={services} selectable selectedRows={selectedRows} onSelectRow={handleRowSelect} onSelectAll={handleSelectAll} onRowClick={row => {
      window.location.href = `/admin/services/edit/${row.id}`;
    }} />
      {selectedRows.length > 0 && <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-300 rounded-lg p-3 flex items-center space-x-4">
          <span className="text-sm font-medium">{selectedRows.length} mục đã chọn</span>
          <button className="px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
            Xóa đã chọn
          </button>
          <button className="px-3 py-2 text-sm bg-amber-700 text-white rounded-md hover:opacity-90">
            Thay đổi trạng thái
          </button>
        </div>}
      <ConfirmModal isOpen={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} onConfirm={handleDelete} title="Xác nhận xóa" message={`Bạn có chắc chắn muốn xóa dịch vụ "${selectedService?.name || ''}"? Hành động này không thể hoàn tác.`} />
    </AdminLayout>;
};
export default AdminServicesList;