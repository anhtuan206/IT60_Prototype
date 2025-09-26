import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import Toast from '../../../components/admin/Toast';
import { Save, X } from 'lucide-react';
const AdminServiceForm = () => {
  const {
    id
  } = useParams();
  const isEditMode = id !== 'new';
  const [showToast, setShowToast] = useState(false);
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Dịch vụ',
    path: '/admin/services'
  }, {
    label: isEditMode ? 'Chỉnh sửa dịch vụ' : 'Thêm dịch vụ mới',
    path: isEditMode ? `/admin/services/edit/${id}` : '/admin/services/new'
  }];
  // Mock data for edit mode
  const serviceData = isEditMode ? {
    name: 'Lưu trú cao cấp',
    type: 'stay',
    price: '350000',
    duration: '24',
    description: 'Dịch vụ lưu trú cao cấp với phòng riêng, đầy đủ tiện nghi và chăm sóc đặc biệt.',
    status: 'active'
  } : {
    name: '',
    type: '',
    price: '',
    duration: '',
    description: '',
    status: 'draft'
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.href = '/admin/services';
    }, 2000);
  };
  return <AdminLayout title={isEditMode ? 'Chỉnh Sửa Dịch Vụ' : 'Thêm Dịch Vụ Mới'} breadcrumbs={breadcrumbs}>
      <form onSubmit={handleSubmit} className="bg-white rounded-md border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Tên dịch vụ*
              </label>
              <input type="text" id="name" defaultValue={serviceData.name} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="type" className="block mb-1 font-medium">
                Loại dịch vụ*
              </label>
              <select id="type" defaultValue={serviceData.type} className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                <option value="">Chọn loại dịch vụ</option>
                <option value="stay">Lưu trú</option>
                <option value="grooming">Làm đẹp</option>
                <option value="spa">Spa</option>
                <option value="training">Đào tạo</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 font-medium">
                Giá (VNĐ)*
              </label>
              <input type="number" id="price" defaultValue={serviceData.price} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="duration" className="block mb-1 font-medium">
                Thời gian (giờ)*
              </label>
              <input type="number" id="duration" defaultValue={serviceData.duration} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label htmlFor="description" className="block mb-1 font-medium">
                Mô tả
              </label>
              <textarea id="description" defaultValue={serviceData.description} className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"></textarea>
            </div>
            <div>
              <label htmlFor="status" className="block mb-1 font-medium">
                Trạng thái
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="status" value="active" defaultChecked={serviceData.status === 'active'} className="mr-2" />
                  <span>Hoạt động</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="status" value="draft" defaultChecked={serviceData.status === 'draft'} className="mr-2" />
                  <span>Bản nháp</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end space-x-3">
          <Link to="/admin/services" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <X size={18} className="mr-2" />
            Hủy
          </Link>
          <button type="submit" className="px-4 py-2 bg-amber-700 text-white rounded-md hover:opacity-90 flex items-center">
            <Save size={18} className="mr-2" />
            Lưu
          </button>
        </div>
      </form>
      {showToast && <div className="fixed bottom-4 right-4">
          <Toast type="success" message={`Dịch vụ đã được ${isEditMode ? 'cập nhật' : 'tạo'} thành công`} onClose={() => setShowToast(false)} />
        </div>}
    </AdminLayout>;
};
export default AdminServiceForm;