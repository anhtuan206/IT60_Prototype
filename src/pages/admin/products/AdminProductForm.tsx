import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import Toast from '../../../components/admin/Toast';
import { Save, X, Upload } from 'lucide-react';

const AdminProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const isEditMode = id !== 'new';
  const [showToast, setShowToast] = useState(false);

  const breadcrumbs = [
    { label: 'Trang chủ', path: '/admin' },
    { label: 'Sản phẩm', path: '/admin/products' },
    {
      label: isEditMode ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới',
      path: isEditMode ? `/admin/products/edit/${id}` : '/admin/products/new'
    }
  ];

  // Mock data for edit mode
  const productData = isEditMode ? {
    name: 'Thức ăn cho chó',
    category: 'food',
    price: '550000',
    stock: '120',
    sku: 'FD-001',
    description: 'Thức ăn hạt khô cao cấp dành cho chó trưởng thành.',
    status: 'active',
    images: ['https://placehold.co/200x200?text=Product+1', 'https://placehold.co/200x200?text=Product+2', 'https://placehold.co/200x200?text=Product+3']
  } : {
    name: '',
    category: '',
    price: '',
    stock: '',
    sku: '',
    description: '',
    status: 'draft',
    images: []
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      window.location.href = '/admin/products';
    }, 2000);
  };

  return (
    <AdminLayout title={isEditMode ? 'Chỉnh Sửa Sản Phẩm' : 'Thêm Sản Phẩm Mới'} breadcrumbs={breadcrumbs}>
      <form onSubmit={handleSubmit} className="bg-white rounded-md border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column (2/3 width) */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Tên sản phẩm*</label>
              <input type="text" id="name" defaultValue={productData.name} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 font-medium">Mô tả</label>
              <textarea id="description" defaultValue={productData.description} className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"></textarea>
            </div>
            <div>
                <h3 className="block mb-2 font-medium">Hình ảnh sản phẩm</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {productData.images.map((img, i) => (
                        <img key={i} src={img} alt={`Product image ${i+1}`} className="w-full h-24 object-cover rounded-md" />
                    ))}
                     <div className="w-full h-24 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                        <Upload size={24} />
                        <span className="text-xs mt-1">Tải lên</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column (1/3 width) */}
          <div className="space-y-6">
             <div>
              <label htmlFor="sku" className="block mb-1 font-medium">SKU*</label>
              <input type="text" id="sku" defaultValue={productData.sku} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="category" className="block mb-1 font-medium">Danh mục*</label>
              <select id="category" defaultValue={productData.category} className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                <option value="">Chọn danh mục</option>
                <option value="food">Thức ăn</option>
                <option value="toys">Đồ chơi</option>
                <option value="accessories">Phụ kiện</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 font-medium">Giá (VNĐ)*</label>
              <input type="number" id="price" defaultValue={productData.price} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="stock" className="block mb-1 font-medium">Số lượng tồn kho*</label>
              <input type="number" id="stock" defaultValue={productData.stock} className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Trạng thái</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="status" value="active" defaultChecked={productData.status === 'active'} className="mr-2" />
                  <span>Hoạt động</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="status" value="draft" defaultChecked={productData.status === 'draft'} className="mr-2" />
                  <span>Bản nháp</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end space-x-3">
          <Link to="/admin/products" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <X size={18} className="mr-2" />
            Hủy
          </Link>
          <button type="submit" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 flex items-center">
            <Save size={18} className="mr-2" />
            Lưu
          </button>
        </div>
      </form>

      {showToast && (
        <div className="fixed bottom-4 right-4">
          <Toast
            type="success"
            message={`Sản phẩm đã được ${isEditMode ? 'cập nhật' : 'tạo'} thành công`}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProductForm;
