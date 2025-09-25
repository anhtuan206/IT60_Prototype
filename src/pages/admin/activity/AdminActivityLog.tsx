import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import FilterBar from '../../../components/admin/FilterBar';
const AdminActivityLog = () => {
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Nhật ký hoạt động',
    path: '/admin/activity'
  }];

  // Mock data based on README
  const activities = [{
    timestamp: '25/09/2025 14:30',
    actor: 'Lê Hoàng (Admin)',
    action: 'update',
    entity: 'Product #FD-001',
    details: 'Giá đã thay đổi từ 500.000 thành 550.000'
  }, {
    timestamp: '25/09/2025 11:00',
    actor: 'Trần Văn D (Staff)',
    action: 'confirm',
    entity: 'Appointment #A-053',
    details: 'Cuộc hẹn đã được xác nhận'
  }, {
    timestamp: '25/09/2025 10:30',
    actor: 'System',
    action: 'create',
    entity: 'Order #1256',
    details: 'Đơn hàng đã được tạo qua API'
  }, {
    timestamp: '24/09/2025 18:00',
    actor: 'Lê Hoàng (Admin)',
    action: 'create',
    entity: 'Service #5',
    details: 'Dịch vụ mới đã được tạo: Dịch vụ đào tạo'
  }, {
    timestamp: '23/09/2025 09:00',
    actor: 'Phạm Minh (Staff)',
    action: 'disable',
    entity: 'User #U-004',
    details: 'Tài khoản người dùng đã bị vô hiệu hóa'
  }];
  const columns = [{
    header: 'Thời gian',
    accessor: 'timestamp'
  }, {
    header: 'Người thực hiện',
    accessor: 'actor'
  }, {
    header: 'Hành động',
    accessor: 'action'
  }, {
    header: 'Đối tượng',
    accessor: 'entity'
  }, {
    header: 'Chi tiết',
    accessor: 'details'
  }];
  return <AdminLayout title="Nhật ký hoạt động" breadcrumbs={breadcrumbs}>
      <FilterBar searchPlaceholder="Tìm kiếm hoạt động...">
        <input type="text" placeholder="Tên người thực hiện" className="border border-gray-300 rounded-md px-3 py-2" />
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Loại đối tượng</option>
          <option value="product">Product</option>
          <option value="service">Service</option>
          <option value="order">Order</option>
          <option value="appointment">Appointment</option>
          <option value="user">User</option>
        </select>
        <input type="date" className="border border-gray-300 rounded-md px-3 py-2" />
        <span>-</span>
        <input type="date" className="border border-gray-300 rounded-md px-3 py-2" />
      </FilterBar>

      <DataTable columns={columns} data={activities} />

    </AdminLayout>;
};
export default AdminActivityLog;