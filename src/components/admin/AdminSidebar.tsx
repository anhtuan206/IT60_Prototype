import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, PackageOpen, ShoppingBag, Calendar, Users, Settings, ClipboardList, LogOut, X } from 'lucide-react';
interface AdminSidebarProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
const AdminSidebar: React.FC<AdminSidebarProps> = ({
  isOpen,
  setOpen
}) => {
  const menuItems = [{
    icon: <LayoutDashboard size={20} />,
    label: 'Bảng Điều Khiển',
    path: '/admin'
  }, {
    icon: <PackageOpen size={20} />,
    label: 'Dịch Vụ',
    path: '/admin/services'
  }, {
    icon: <ShoppingBag size={20} />,
    label: 'Sản Phẩm',
    path: '/admin/products'
  }, {
    icon: <ShoppingBag size={20} />,
    label: 'Đơn Hàng',
    path: '/admin/orders'
  }, {
    icon: <Calendar size={20} />,
    label: 'Lịch Hẹn',
    path: '/admin/appointments'
  }, {
    icon: <Users size={20} />,
    label: 'Người Dùng',
    path: '/admin/users'
  }, {
    icon: <Settings size={20} />,
    label: 'Cài Đặt',
    path: '/admin/settings'
  }, {
    icon: <ClipboardList size={20} />,
    label: 'Nhật Ký Hoạt Động',
    path: '/admin/activity'
  }];
  return <>
      {/* Overlay for mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)}></div>

      <div className={`fixed lg:static top-0 left-0 w-64 h-full bg-white border-r border-gray-200 flex flex-col z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center" style={{ paddingBottom: '10px' }}>
          <div>
            <h1 className="text-xl font-bold">PET HOTEL</h1>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
          <button className="lg:hidden p-1" onClick={() => setOpen(false)}>
              <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => <li key={index}>
                <Link to={item.path} className="flex items-center px-4 py-3 text-amber-800 hover:bg-orange-50 rounded-md mx-2">
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>)}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link to="/admin/login">
          <button className="flex items-center w-full px-4 py-3 text-amber-800 hover:bg-orange-50 rounded-md">
            <LogOut size={20} className="mr-3" />
            Đăng Xuất
          </button>
          </Link>
        </div>
      </div>
    </>;
};
export default AdminSidebar;