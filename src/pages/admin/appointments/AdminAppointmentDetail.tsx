import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import Toast from '../../../components/admin/Toast';
import StatusBadge from '../../../components/admin/StatusBadge';
import { ChevronLeft, Save, Check, X } from 'lucide-react';
import { services } from '../../Services';
const AdminAppointmentDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Lịch hẹn',
    path: '/admin/appointments'
  }, {
    label: `Chi tiết lịch hẹn #A-${id}`
  }];

  // Mock appointment data using real services
  const selectedService = services[0]; // Using the hotel service
  const appointment = {
    id: `#A-${id}`,
    status: 'requested',
    customer: {
      name: 'Nguyễn Văn An',
      email: 'nguyenvana@email.com',
      phone: '0987654321'
    },
    pet: {
      name: 'KiKi',
      type: 'Chó Poodle',
      age: '2 tuổi',
      gender: 'Cái',
      weight: '8kg',
      specialNeeds: 'Cần chăm sóc đặc biệt do tuổi còn nhỏ'
    },
    service: {
      name: selectedService.title,
      price: selectedService.price,
      description: selectedService.description,
      duration: selectedService.description.duration,
      includes: selectedService.description.includes,
      requirements: selectedService.description.requirements
    },
    datetime: '27/09/2025 10:00',
    checkOut: '30/09/2025 10:00', // For hotel services
    staff: 'unassigned',
    notes: 'Khách hàng yêu cầu phòng có cửa sổ và khu vực yên tĩnh. Thú cưng không thích tiếng ồn.'
  };
  const handleAction = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return <AdminLayout title={`Lịch hẹn ${appointment.id}`} breadcrumbs={breadcrumbs}>
      <div className="mb-4">
        <Link to="/admin/appointments" className="flex items-center text-sm text-gray-500 hover:text-black">
            <ChevronLeft size={18} className="mr-1" />
            Quay lại danh sách lịch hẹn
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-md p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Thông tin lịch hẹn</h2>
                        <StatusBadge status={appointment.status} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => handleAction('Lịch hẹn đã được xác nhận.')} className="bg-amber-700 text-white px-4 py-2 rounded-md flex items-center hover:opacity-90">
                            <Check size={16} className="mr-2" />
                            Xác nhận
                        </button>
                        <button onClick={() => handleAction('Lịch hẹn đã được hủy.')} className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center hover:opacity-90">
                            <X size={16} className="mr-2" />
                            Hủy
                        </button>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-sm text-gray-500">Dịch vụ</p>
                        <p className="font-medium">{appointment.service.name}</p>
                        <p className="text-sm text-amber-600 font-medium">{appointment.service.price}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Ngày & Giờ</p>
                        <p className="font-medium">{appointment.datetime}</p>
                        {appointment.checkOut && (
                          <p className="text-sm text-gray-600">Ngày trả: {appointment.checkOut}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="staff" className="text-sm text-gray-500">Nhân viên phụ trách</label>
                        <select id="staff" defaultValue={appointment.staff} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                            <option value="unassigned">Chưa chỉ định</option>
                            <option value="staff1">Nguyễn Thị C</option>
                            <option value="staff2">Trần Văn D</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="notes" className="text-sm text-gray-500">Ghi chú của khách</label>
                        <p className="font-medium mt-1">{appointment.notes || 'Không có'}</p>
                    </div>
                </div>

                {/* Service Details Section */}
                <div className="mt-6 pt-6 border-t">
                    <h3 className="text-md font-semibold mb-4">Chi tiết dịch vụ</h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm text-gray-500">Bao gồm</p>
                            <p className="text-sm">{appointment.service.includes}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Thời gian thực hiện</p>
                            <p className="text-sm">{appointment.service.duration}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Yêu cầu đối với thú cưng</p>
                            <p className="text-sm">{appointment.service.requirements}</p>
                        </div>
                    </div>
                </div>
                 <div className="mt-6 pt-6 border-t">
                    <label htmlFor="internal_notes" className="block mb-1 font-medium">Ghi chú nội bộ</label>
                    <textarea id="internal_notes" placeholder="Thêm ghi chú cho nhân viên..." className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"></textarea>
                </div>
                <div className="mt-4 flex justify-end">
                     <button onClick={() => handleAction('Ghi chú đã được lưu.')} className="bg-amber-700 text-white px-4 py-2 rounded-md flex items-center hover:opacity-90">
                        <Save size={16} className="mr-2" />
                        Lưu ghi chú
                    </button>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-md p-6 h-fit">
                <h3 className="text-md font-semibold mb-4">Thông tin khách hàng</h3>
                <p className="font-semibold">{appointment.customer.name}</p>
                <p className="text-sm text-gray-600">{appointment.customer.email}</p>
                <p className="text-sm text-gray-600">{appointment.customer.phone}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-6 h-fit">
                <h3 className="text-md font-semibold mb-4">Thông tin thú cưng</h3>
                <p className="font-semibold">{appointment.pet.name}</p>
                <p className="text-sm text-gray-600">Loại: {appointment.pet.type}</p>
                <p className="text-sm text-gray-600">Tuổi: {appointment.pet.age}</p>
                <p className="text-sm text-gray-600">Giới tính: {appointment.pet.gender}</p>
                <p className="text-sm text-gray-600">Cân nặng: {appointment.pet.weight}</p>
                {appointment.pet.specialNeeds && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm text-gray-500">Chăm sóc đặc biệt</p>
                        <p className="text-sm text-amber-600">{appointment.pet.specialNeeds}</p>
                    </div>
                )}
            </div>
        </div>
      </div>

      {showToast && <div className="fixed bottom-4 right-4">
          <Toast type="success" message={toastMessage} onClose={() => setShowToast(false)} />
        </div>}
    </AdminLayout>;
};
export default AdminAppointmentDetail;