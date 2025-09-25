import React, { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import Toast from '../../../components/admin/Toast';
import { Save } from 'lucide-react';
const AdminSettings = () => {
  const breadcrumbs = [{
    label: 'Trang chủ',
    path: '/admin'
  }, {
    label: 'Cài đặt',
    path: '/admin/settings'
  }];
  const [showToast, setShowToast] = useState(false);
  const [selectedRole, setSelectedRole] = useState('staff');
  const roles = [{
    id: 'admin',
    name: 'Quản trị hệ thống'
  }, {
    id: 'staff',
    name: 'Người dùng'
  }];
  const modules = ['Dịch vụ', 'Sản phẩm', 'Đơn hàng', 'Lịch hẹn', 'Khách hàng'];
  const permissions = ['Xem', 'Tạo', 'Sửa', 'Xóa'];
  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return <AdminLayout title="Cài đặt" breadcrumbs={breadcrumbs}>
      <div className="bg-white border border-gray-200 rounded-md p-6">
        <h2 className="text-lg font-semibold mb-4">Vai trò & Quyền hạn</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Roles List */}
          <div className="md:col-span-1 border-r pr-4">
            <h3 className="font-medium mb-2">Vai trò</h3>
            <ul className="space-y-1">
              {roles.map(role => <li key={role.id}>
                  <button onClick={() => setSelectedRole(role.id)} className={`w-full text-left px-3 py-2 rounded-md ${selectedRole === role.id ? 'bg-accent-beige font-semibold' : 'hover:bg-gray-50'}`}>
                    {role.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Permissions Matrix */}
          <div className="md:col-span-3">
            <h3 className="font-medium mb-2">
              Quyền hạn cho vai trò:{' '}
              <span className="font-bold">
                {roles.find(r => r.id === selectedRole)?.name}
              </span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium py-2">Chức năng</th>
                    {permissions.map(p => <th key={p} className="text-center font-medium py-2">
                        {p}
                      </th>)}
                  </tr>
                </thead>
                <tbody>
                  {modules.map(mod => <tr key={mod} className="border-b hover:bg-gray-50">
                      <td className="py-3 font-medium">{mod}</td>
                      {permissions.map(p => <td key={p} className="text-center py-3">
                          <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-primary-blue focus:ring-primary-blue" />
                        </td>)}
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
          <button onClick={handleSave} className="px-4 py-2 bg-primary-blue text-white rounded-md hover:opacity-90 flex items-center">
            <Save size={18} className="mr-2" />
            Lưu thay đổi
          </button>
        </div>
      </div>
      {showToast && <div className="fixed bottom-4 right-4">
          <Toast type="success" message="Quyền hạn đã được cập nhật thành công" onClose={() => setShowToast(false)} />
        </div>}
    </AdminLayout>;
};
export default AdminSettings;