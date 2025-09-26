import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';
import AdminBreadcrumbs from './AdminBreadcrumbs';
interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs: Array<{
    label: string;
    path?: string;
  }>;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  title,
  breadcrumbs
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return <div className="flex h-screen bg-white">
      <AdminSidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopbar title={title} onMenuClick={() => setSidebarOpen(true)} />
        <div className="px-6 py-3 border-b border-gray-200">
          <AdminBreadcrumbs items={breadcrumbs} />
        </div>
        <main className="flex-1 overflow-auto bg-orange-50 p-6">
          {children}
        </main>
      </div>
    </div>;
};
export default AdminLayout;