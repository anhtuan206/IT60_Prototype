import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import FilterBar from '../../../components/admin/FilterBar';
import StatusBadge from '../../../components/admin/StatusBadge';
import { Eye } from 'lucide-react';
const AdminOrdersList = () => {
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Đơn hàng',
    path: '/admin/orders'
  }];
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Mock data based on README
  const orders = [{
    id: '#1256',
    customer: 'Nguyễn Văn An',
    total: '1.250.000₫',
    status: 'paid',
    created: '25/09/2025'
  }, {
    id: '#1255',
    customer: 'Trần Thị Bích',
    total: '850.000₫',
    status: 'pending',
    created: '25/09/2025'
  }, {
    id: '#1254',
    customer: 'Lê Hoàng',
    total: '2.100.000₫',
    status: 'shipped',
    created: '24/09/2025'
  }, {
    id: '#1253',
    customer: 'Phạm Minh',
    total: '450.000₫',
    status: 'cancelled',
    created: '23/09/2025'
  }, {
    id: '#1252',
    customer: 'Vũ Thị Lan',
    total: '1.800.000₫',
    status: 'paid',
    created: '22/09/2025'
  }];
  const columns = [{
    header: 'Order ID',
    accessor: 'id'
  }, {
    header: 'Khách hàng',
    accessor: 'customer'
  }, {
    header: 'Tổng tiền',
    accessor: 'total'
  }, {
    header: 'Trạng thái',
    accessor: 'status',
    render: (value: string) => <StatusBadge status={value as any} />
  }, {
    header: 'Ngày tạo',
    accessor: 'created'
  }, {
    header: 'Thao tác',
    accessor: 'actions',
    render: (_: any, row: any) => <div className="flex space-x-2">
          <Link to={`/admin/orders/${row.id.replace('#', '')}`} className="p-1 hover:bg-gray-100 rounded">
            <Eye size={16} />
          </Link>
        </div>
  }];
  const handleRowSelect = (row: any) => {
    if (selectedRows.find(r => r.id === row.id)) {
      setSelectedRows(selectedRows.filter(r => r.id !== row.id));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };
  const handleSelectAll = () => {
    if (selectedRows.length === orders.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders);
    }
  };
  return <AdminLayout title="Đơn hàng" breadcrumbs={breadcrumbs}>
      <FilterBar searchPlaceholder="Tìm đơn hàng...">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả trạng thái</option>
          <option value="pending">Chờ xử lý</option>
          <option value="paid">Đã thanh toán</option>
          <option value="shipped">Đã gửi hàng</option>
          <option value="cancelled">Đã hủy</option>
        </select>
        <input type="date" className="border border-gray-300 rounded-md px-3 py-2" />
        <span>-</span>
        <input type="date" className="border border-gray-300 rounded-md px-3 py-2" />
      </FilterBar>

      <DataTable columns={columns} data={orders} selectable selectedRows={selectedRows} onSelectRow={handleRowSelect} onSelectAll={handleSelectAll} onRowClick={row => {
      window.location.href = `/admin/orders/${row.id.replace('#', '')}`;
    }} />

      {selectedRows.length > 0 && <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-300 rounded-lg p-3 flex items-center space-x-4">
          <span className="text-sm font-medium">{selectedRows.length} mục đã chọn</span>
          <button className="px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
            Xóa đã chọn
          </button>
          <button className="px-3 py-2 text-sm bg-primary-blue text-white rounded-md hover:opacity-90">
            Thay đổi trạng thái
          </button>
        </div>}
    </AdminLayout>;
};
export default AdminOrdersList;