import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import FilterBar from '../../../components/admin/FilterBar';
import StatusBadge from '../../../components/admin/StatusBadge';
import ConfirmModal from '../../../components/admin/ConfirmModal';
import { Edit, Trash2, Plus } from 'lucide-react';

const AdminProductsList = () => {
  const breadcrumbs = [
    { label: 'Trang chủ', path: '/admin' },
    { label: 'Sản phẩm', path: '/admin/products' },
  ];

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  // Mock data based on README
  const products = [
    { id: 1, sku: 'FD-001', name: 'Thức ăn cho chó', category: 'Thức ăn', price: '550.000₫', stock: 120, status: 'active', updated: '20/09/2025' },
    { id: 2, sku: 'TY-012', name: 'Đồ chơi gặm', category: 'Đồ chơi', price: '150.000₫', stock: 80, status: 'active', updated: '18/09/2025' },
    { id: 3, sku: 'AC-034', name: 'Vòng cổ da', category: 'Phụ kiện', price: '250.000₫', stock: 5, status: 'low_stock', updated: '15/09/2025' },
    { id: 4, sku: 'FD-002', name: 'Thức ăn cho mèo', category: 'Thức ăn', price: '480.000₫', stock: 0, status: 'out_of_stock', updated: '12/09/2025' },
    { id: 5, sku: 'TY-005', name: 'Cần câu lông vũ', category: 'Đồ chơi', price: '120.000₫', stock: 60, status: 'active', updated: '10/09/2025' },
    { id: 6, sku: 'AC-056', name: 'Nhà cây cho mèo', category: 'Phụ kiện', price: '1.200.000₫', stock: 15, status: 'draft', updated: '05/09/2025' },
  ];

  const columns = [
    { header: 'SKU', accessor: 'sku' },
    { header: 'Tên sản phẩm', accessor: 'name' },
    { header: 'Danh mục', accessor: 'category' },
    { header: 'Giá', accessor: 'price' },
    { header: 'Tồn kho', accessor: 'stock' },
    { header: 'Trạng thái', accessor: 'status', render: (value: string) => <StatusBadge status={value as any} /> },
    { header: 'Cập nhật', accessor: 'updated' },
    {
      header: 'Thao tác',
      accessor: 'actions',
      render: (_: any, row: any) => (
        <div className="flex space-x-2">
          <Link to={`/admin/products/edit/${row.id}`} className="p-1 hover:bg-gray-100 rounded">
            <Edit size={16} />
          </Link>
          <button
            className="p-1 hover:bg-gray-100 rounded text-gray-500"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(row);
              setDeleteModalOpen(true);
            }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const handleRowSelect = (row: any) => {
    if (selectedRows.find(r => r.id === row.id)) {
      setSelectedRows(selectedRows.filter(r => r.id !== row.id));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === products.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(products);
    }
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log('Deleting product:', selectedProduct);
    setDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <AdminLayout title="Sản phẩm" breadcrumbs={breadcrumbs}>
      <FilterBar searchPlaceholder="Tìm sản phẩm...">
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả danh mục</option>
          <option value="food">Thức ăn</option>
          <option value="toys">Đồ chơi</option>
          <option value="accessories">Phụ kiện</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2">
          <option value="">Tất cả trạng thái</option>
          <option value="active">Hoạt động</option>
          <option value="draft">Bản nháp</option>
        </select>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="border-gray-300 rounded" />
          <span>Tồn kho thấp</span>
        </label>
      </FilterBar>

      <div className="mb-4">
        <Link to="/admin/products/new" className="inline-flex items-center bg-primary-blue text-white px-4 py-2 rounded-md hover:opacity-90">
          <Plus size={16} className="mr-2" />
          Thêm Sản Phẩm
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={products}
        selectable
        selectedRows={selectedRows}
        onSelectRow={handleRowSelect}
        onSelectAll={handleSelectAll}
        onRowClick={(row) => {
          window.location.href = `/admin/products/edit/${row.id}`;
        }}
      />

      {selectedRows.length > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-300 rounded-lg p-3 flex items-center space-x-4">
          <span className="text-sm font-medium">{selectedRows.length} mục đã chọn</span>
          <button className="px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
            Xóa đã chọn
          </button>
          <button className="px-3 py-2 text-sm bg-primary-blue text-white rounded-md hover:opacity-90">
            Thay đổi trạng thái
          </button>
        </div>
      )}

      <ConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Xác nhận xóa"
        message={`Bạn có chắc chắn muốn xóa sản phẩm "${selectedProduct?.name || ''}"?`}
      />
    </AdminLayout>
  );
};

export default AdminProductsList;
