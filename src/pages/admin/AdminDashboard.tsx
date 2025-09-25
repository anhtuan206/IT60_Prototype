import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Calendar, Package, DollarSign, AlertCircle, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const breadcrumbs = [
    { label: 'Trang chủ', path: '/admin' },
    { label: 'Bảng điều khiển', path: '/admin' },
  ];

  const kpiData = [
    { title: 'Tổng Đơn Hàng', value: '128', change: '+12% so với tuần trước', icon: Package, color: 'blue' },
    { title: 'Lịch Hẹn Hôm Nay', value: '8', change: '2 chờ xác nhận', icon: Calendar, color: 'orange' },
    { title: 'Doanh Thu', value: '8.5M₫', change: '+5% so với tháng trước', icon: DollarSign, color: 'green' },
    { title: 'Hàng Tồn Kho Thấp', value: '3', change: 'Cần nhập thêm', icon: AlertCircle, color: 'red' },
  ];

  const recentOrders = [
    { id: '#ORD-1001', customer: 'Khách hàng 1', total: '100.000₫', status: 'Đã thanh toán', statusColor: 'green' },
    { id: '#ORD-1002', customer: 'Khách hàng 2', total: '250.000₫', status: 'Đang chờ', statusColor: 'yellow' },
    { id: '#ORD-1003', customer: 'Khách hàng 3', total: '500.000₫', status: 'Đã giao hàng', statusColor: 'gray' },
    { id: '#ORD-1004', customer: 'Khách hàng 4', total: '120.000₫', status: 'Đã hủy', statusColor: 'red' },
    { id: '#ORD-1005', customer: 'Khách hàng 5', total: '300.000₫', status: 'Đã thanh toán', statusColor: 'green' },
  ];

  const appointments = [
    { time: '09:00', service: 'Dịch vụ Cắt Tỉa', customer: 'Khách hàng 1', pet: 'Milo', color: 'blue' },
    { time: '11:00', service: 'Dịch vụ Tắm Rửa', customer: 'Khách hàng 2', pet: 'Lucy', color: 'blue' },
    { time: '14:00', service: 'Lưu Trú Ngắn Hạn', customer: 'Khách hàng 3', pet: 'Charlie', color: 'orange' },
  ];

  const statusColorMap: { [key: string]: string } = {
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
    red: 'bg-red-100 text-red-800',
    blue: 'bg-blue-100 text-blue-800',
    orange: 'bg-orange-100 text-orange-800',
  };

  return (
    <AdminLayout title="Bảng Điều Khiển" breadcrumbs={breadcrumbs}>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-neutral-text">{kpi.title}</h3>
              <div className={`p-2 rounded-full ${statusColorMap[kpi.color]}`}>
                <kpi.icon size={20} />
              </div>
            </div>
            <p className="text-3xl font-bold text-neutral-text">{kpi.value}</p>
            <p className="text-sm text-gray-500 mt-2">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 h-full shadow-sm">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-neutral-text">Đơn Hàng Gần Đây</h2>
              <Link to="/admin/orders" className="text-sm text-primary-blue hover:underline">
                Xem tất cả
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent-beige text-left">
                  <tr>
                    <th className="px-4 py-3 text-sm font-medium text-neutral-text">Mã</th>
                    <th className="px-4 py-3 text-sm font-medium text-neutral-text">Khách Hàng</th>
                    <th className="px-4 py-3 text-sm font-medium text-neutral-text">Tổng</th>
                    <th className="px-4 py-3 text-sm font-medium text-neutral-text">Trạng Thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-neutral-text">{order.id}</td>
                      <td className="px-4 py-3 text-sm text-neutral-text">{order.customer}</td>
                      <td className="px-4 py-3 text-sm text-neutral-text">{order.total}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${statusColorMap[order.statusColor]}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Appointments */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 h-full shadow-sm">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-neutral-text">Lịch Hẹn Hôm Nay</h2>
              <Link to="/admin/appointments" className="text-sm text-primary-blue hover:underline">
                Xem tất cả
              </Link>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {appointments.map((appt, index) => (
                  <div key={index} className={`border-l-4 pl-3 py-2 border-${appt.color}-500`}>
                    <div className="text-sm font-medium text-neutral-text">
                      {appt.time} - {appt.service}
                    </div>
                    <div className="text-xs text-gray-500">
                      {appt.customer} - Thú cưng: {appt.pet}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex flex-wrap gap-4">
        <Link 
          to="/admin/services/new" 
          className="bg-primary-blue text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center"
        >
          <Plus size={16} className="mr-2" /> Thêm Dịch Vụ Mới
        </Link>
        <Link 
          to="/admin/products/new" 
          className="bg-primary-blue text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center"
        >
          <Plus size={16} className="mr-2" /> Thêm Sản Phẩm Mới
        </Link>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;