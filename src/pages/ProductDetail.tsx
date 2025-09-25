import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShoppingCart } from 'lucide-react';
import { products } from './Products';
const ProductDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const product = products.find(p => p.id === id);
  if (!product) {
    return <div className="min-h-screen bg-white text-neutral-text flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold mb-8">Sản phẩm không tìm thấy</h1>
          <p>Rất tiếc, sản phẩm bạn đang tìm kiếm không tồn tại.</p>
        </main>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-white text-neutral-text flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div>
            <img src={product.image || `https://placehold.co/600x600?text=Product+${id}`} alt={product.title} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          {/* Right Column - Content */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-4">Danh mục: {product.category}</p>
            
            <div className="text-3xl font-bold text-warm-gold mb-6">
              {product.price}
            </div>

            <button className="flex items-center justify-center bg-warm-gold text-white px-8 py-3 rounded-md w-full md:w-auto mb-8 hover:opacity-90 transition-opacity">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Thêm Vào Giỏ Hàng
            </button>

            {/* Description/Specs Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold mb-4">Mô Tả Sản Phẩm</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Thông Số Kỹ Thuật</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Trọng lượng:</strong> {product.specifications.weight}</li>
                <li><strong>Kích thước:</strong> {product.specifications.size}</li>
                <li><strong>Chất liệu:</strong> {product.specifications.material}</li>
                <li><strong>Xuất xứ:</strong> {product.specifications.origin}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default ProductDetail;