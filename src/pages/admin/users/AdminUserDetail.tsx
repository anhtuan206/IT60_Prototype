import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import Toast from '../../../components/admin/Toast';
import { Save, X, KeyRound } from 'lucide-react';
const AdminUserDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const isEditMode = id !== 'new';
  const [showToast, setShowToast] = useState(false);
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Người dùng',
    path: '/admin/users'
  }, {
    label: isEditMode ? 'Chỉnh sửa người dùng' : 'Thêm người dùng mới',
    path: isEditMode ? `/admin/users/edit/${id}` : '/admin/users/new'
  }];

  // Mock data for edit mode
  const userData = isEditMode ? {
    name: 'Nguyễn Văn An',
    email: 'nguyenvana@email.com',
    phone: '0987654321',
    role: 'customer',
    status: 'active'
  } : {
    name: '',
    email: '',
    phone: '',
    role: 'customer',
    status: 'active'
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.href = '/admin/users';
    }, 2000);
  };
  return <AdminLayout title={isEditMode ? 'Chỉnh Sửa Người Dùng' : 'Thêm Người Dùng Mới'} breadcrumbs={breadcrumbs}>
      <form onSubmit={handleSubmit} className="bg-white rounded-md border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col items-center">
                <img src="https://placehold.co/128x128?text=User" alt="User Avatar" className="w-32 h-32 rounded-full mb-4" />
                <button type="button" className="text-sm text-amber-700 hover:underline">Thay đổi ảnh đại diện</button>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Họ và tên*</label>
                    <input type="text" id="name" defaultValue={userData.name} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email*</label>
                    <input type="email" id="email" defaultValue={userData.email} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">Số điện thoại</label>
                    <input type="tel" id="phone" defaultValue={userData.phone} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="role" className="block mb-1 font-medium">Vai trò*</label>
                    <select id="role" defaultValue={userData.role} className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                        <option value="customer">Customer</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">Trạng thái</label>
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-md border border-gray-200">
                        <label htmlFor="status-toggle" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="status-toggle" defaultChecked={userData.status === 'active'} className="sr-only" />
                                <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 transform peer-checked:translate-x-6 peer-checked:bg-amber-700"></div>
                            </div>
                            <div className="ml-3 text-amber-800 font-medium">
                                {userData.status === 'active' ? 'Hoạt động' : 'Vô hiệu hóa'}
                            </div>
                        </label>
                    </div>
                </div>
                 <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">Bảo mật</label>
                    <button type="button" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
                        <KeyRound size={16} className="mr-2" />
                        Gửi email đặt lại mật khẩu
                    </button>
                </div>
            </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end space-x-3">
          <Link to="/admin/users" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <X size={18} className="mr-2" />
            Hủy
          </Link>
          <button type="submit" className="px-4 py-2 bg-amber-700 text-white rounded-md hover:opacity-90 flex items-center">
            <Save size={18} className="mr-2" />
            Lưu thay đổi
          </button>
        </div>
      </form>

      {showToast && <div className="fixed bottom-4 right-4">
          <Toast type="success" message={`Người dùng đã được ${isEditMode ? 'cập nhật' : 'tạo'} thành công`} onClose={() => setShowToast(false)} />
        </div>}
    </AdminLayout>;
};
export default AdminUserDetail;