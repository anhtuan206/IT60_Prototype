import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import Toast from '../../../components/admin/Toast';
import StatusBadge from '../../../components/admin/StatusBadge';
import { ChevronLeft, Save } from 'lucide-react';
const AdminOrderDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [showToast, setShowToast] = useState(false);
  const [status, setStatus] = useState('paid');
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Đơn hàng',
    path: '/admin/orders'
  }, {
    label: `Chi tiết đơn hàng #${id}`
  }];

  // Mock data
  const order = {
    id: `#${id}`,
    customer: {
      name: 'Nguyễn Văn An',
      email: 'nguyenvana@email.com',
      phone: '0987654321',
      address: '123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh'
    },
    items: [{
      id: 1,
      name: 'Thức ăn cho chó',
      sku: 'FD-001',
      quantity: 2,
      price: '550.000₫',
      total: '1.100.000₫'
    }, {
      id: 2,
      name: 'Vòng cổ da',
      sku: 'AC-034',
      quantity: 1,
      price: '250.000₫',
      total: '250.000₫'
    }],
    totals: {
      subtotal: '1.350.000₫',
      shipping: '50.000₫',
      tax: '0₫',
      grandTotal: '1.400.000₫'
    },
    timeline: [{
      status: 'paid',
      date: '25/09/2025 10:30',
      note: 'Khách hàng đã thanh toán qua VNPAY.'
    }, {
      status: 'pending',
      date: '25/09/2025 09:15',
      note: 'Đơn hàng đã được tạo.'
    }]
  };
  const handleStatusUpdate = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return <AdminLayout title={`Đơn hàng ${order.id}`} breadcrumbs={breadcrumbs}>
      <div className="mb-4">
        <Link to="/admin/orders" className="flex items-center text-sm text-gray-500 hover:text-black">
            <ChevronLeft size={18} className="mr-1" />
            Quay lại danh sách đơn hàng
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Chi tiết đơn hàng</h2>
            <div className="flex items-center space-x-2">
                <select value={status} onChange={e => setStatus(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="pending">Chờ xử lý</option>
                    <option value="paid">Đã thanh toán</option>
                    <option value="shipped">Đã gửi hàng</option>
                    <option value="cancelled">Đã hủy</option>
                </select>
                <button onClick={handleStatusUpdate} className="bg-primary-blue text-white px-4 py-2 rounded-md flex items-center hover:opacity-90">
                    <Save size={16} className="mr-2" />
                    Cập nhật trạng thái
                </button>
            </div>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            {/* Items table */}
            <div className="bg-white border border-gray-200 rounded-md p-6">
                <h3 className="text-md font-semibold mb-4">Sản phẩm</h3>
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left font-medium py-2">Sản phẩm</th>
                            <th className="text-right font-medium py-2">Số lượng</th>
                            <th className="text-right font-medium py-2">Giá</th>
                            <th className="text-right font-medium py-2">Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map(item => <tr key={item.id} className="border-b">
                                <td className="py-3">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                                </td>
                                <td className="text-right py-3">x{item.quantity}</td>
                                <td className="text-right py-3">{item.price}</td>
                                <td className="text-right py-3 font-medium">{item.total}</td>
                            </tr>)}
                    </tbody>
                </table>
                <div className="mt-4 space-y-2 text-right">
                    <p><strong>Tổng phụ:</strong> {order.totals.subtotal}</p>
                    <p><strong>Vận chuyển:</strong> {order.totals.shipping}</p>
                    <p><strong>Thuế:</strong> {order.totals.tax}</p>
                    <p className="text-lg font-bold"><strong>Tổng cộng:</strong> {order.totals.grandTotal}</p>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-white border border-gray-200 rounded-md p-6">
                <h3 className="text-md font-semibold mb-4">Lịch sử đơn hàng</h3>
                <div className="space-y-4">
                    {order.timeline.map((entry, index) => <div key={index} className="flex">
                            <div className="mr-4">
                                <StatusBadge status={entry.status} />
                            </div>
                            <div>
                                <p className="font-medium">{entry.note}</p>
                                <p className="text-sm text-gray-500">{entry.date}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>

        {/* Customer info */}
        <div className="bg-white border border-gray-200 rounded-md p-6 h-fit">
            <h3 className="text-md font-semibold mb-4">Thông tin khách hàng</h3>
            <p className="font-semibold">{order.customer.name}</p>
            <p className="text-sm text-gray-600">{order.customer.email}</p>
            <p className="text-sm text-gray-600">{order.customer.phone}</p>
            <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">Địa chỉ giao hàng</h4>
                <p className="text-sm text-gray-600">{order.customer.address}</p>
            </div>
        </div>
      </div>

      {showToast && <div className="fixed bottom-4 right-4">
          <Toast type="success" message="Trạng thái đơn hàng đã được cập nhật" onClose={() => setShowToast(false)} />
        </div>}
    </AdminLayout>;
};
export default AdminOrderDetail;