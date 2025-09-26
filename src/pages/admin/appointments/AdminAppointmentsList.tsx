import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import FilterBar from '../../../components/admin/FilterBar';
import StatusBadge from '../../../components/admin/StatusBadge';
import { Eye } from 'lucide-react';
const AdminAppointmentsList = () => {
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Lịch hẹn',
    path: '/admin/appointments'
  }];
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Mock data based on README
  const appointments = [{
    id: '#A-056',
    customer: 'Trần Thị Bích',
    pet: 'Milo',
    service: 'Cắt tỉa lông',
    datetime: '28/09/2025 14:00',
    status: 'confirmed'
  }, {
    id: '#A-055',
    customer: 'Nguyễn Văn An',
    pet: 'KiKi',
    service: 'Lưu trú cao cấp',
    datetime: '27/09/2025 10:00',
    status: 'requested'
  }, {
    id: '#A-054',
    customer: 'Lê Hoàng',
    pet: 'Heo',
    service: 'Tắm và vệ sinh',
    datetime: '26/09/2025 16:30',
    status: 'cancelled'
  }, {
    id: '#A-053',
    customer: 'Phạm Minh',
    pet: 'Bông',
    service: 'Dịch vụ spa',
    datetime: '26/09/2025 11:00',
    status: 'confirmed'
  }, {
    id: '#A-052',
    customer: 'Vũ Thị Lan',
    pet: 'Gấu',
    service: 'Lưu trú cao cấp',
    datetime: '25/09/2025 18:00',
    status: 'completed'
  }];
  const columns = [{
    header: 'Appt ID',
    accessor: 'id'
  }, {
    header: 'Khách hàng',
    accessor: 'customer'
  }, {
    header: 'Thú cưng',
    accessor: 'pet'
  }, {
    header: 'Dịch vụ',
    accessor: 'service'
  }, {
    header: 'Ngày & Giờ',
    accessor: 'datetime'
  }, {
    header: 'Trạng thái',
    accessor: 'status',
    render: (value: string) => <StatusBadge status={value as any} />
  }, {
    header: 'Thao tác',
    accessor: 'actions',
    render: (_: any, row: any) => <div className="flex space-x-2">
          <Link to={`/admin/appointments/${row.id.replace('#A-', '')}`} className="p-1 hover:bg-gray-100 rounded">
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
    if (selectedRows.length === appointments.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(appointments);
    }
  };
  return <AdminLayout title="Lịch hẹn" breadcrumbs={breadcrumbs}>
      <FilterBar searchPlaceholder="Tìm lịch hẹn...">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả trạng thái</option>
          <option value="requested">Yêu cầu</option>
          <option value="confirmed">Đã xác nhận</option>
          <option value="cancelled">Đã hủy</option>
          <option value="completed">Đã hoàn thành</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả dịch vụ</option>
          <option value="stay">Lưu trú</option>
          <option value="grooming">Làm đẹp</option>
          <option value="spa">Spa</option>
        </select>
        <input type="date" className="border border-gray-300 rounded-md px-3 py-2" />
        <span>-</span>
        <input type="date" className="border border-gray-300 rounded-md px-3 py-2" />
      </FilterBar>

      <DataTable columns={columns} data={appointments} selectable selectedRows={selectedRows} onSelectRow={handleRowSelect} onSelectAll={handleSelectAll} onRowClick={row => {
      window.location.href = `/admin/appointments/${row.id.replace('#A-', '')}`;
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
    </AdminLayout>;
};
export default AdminAppointmentsList;