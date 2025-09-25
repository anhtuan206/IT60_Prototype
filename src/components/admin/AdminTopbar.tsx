import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

interface AdminTopbarProps {
  title: string;
  onMenuClick: () => void;
}

const AdminTopbar: React.FC<AdminTopbarProps> = ({ title, onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
            <button className="lg:hidden mr-4 p-1" onClick={onMenuClick}>
                <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <input type="text" placeholder="Tìm kiếm..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64" />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://placehold.co/32x32?text=A" alt="User Avatar" className="w-8 h-8 rounded-full" />
            <span className="hidden sm:inline text-sm font-medium">Admin</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default AdminTopbar;