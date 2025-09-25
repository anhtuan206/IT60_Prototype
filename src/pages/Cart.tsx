import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    { id: 1, name: 'Khăn Tắm Siêu Thấm Hút', price: '50.000₫', quantity: 2, image: 'https://paddy.vn/cdn/shop/files/khan-tam-cho-meo-sieu-tham-hut.jpg?v=1692494975' },
    { id: 2, name: 'Xịt Khử Mùi & Khử Trùng Chuồng Nuôi (Pet-Safe)', price: '200.000₫', quantity: 2, image: 'https://fuwa.com.vn/wp-content/uploads/2024/02/xit-khu-mui-da-nang-31.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-text flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-neutral-text">Giỏ Hàng Của Bạn</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-md">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-4 flex items-center ${index < cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-md object-cover" />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-neutral-text">{item.name}</h3>
                      <button className="text-gray-500 hover:text-red-600">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="my-2 text-gray-600">{item.price}</p>
                    <div className="flex items-center">
                      <button className="border border-gray-300 p-1 rounded-md hover:bg-gray-100">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-4 font-medium">{item.quantity}</span>
                      <button className="border border-gray-300 p-1 rounded-md hover:bg-gray-100">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="bg-accent-beige p-4 rounded-md">
                <h3 className="font-medium mb-2 text-neutral-text">Thêm mã giảm giá</h3>
                <div className="flex">
                  <input type="text" className="border border-gray-300 p-2 flex-grow rounded-l-md" placeholder="Nhập mã" />
                  <button className="bg-warm-gold text-white p-2 px-4 rounded-r-md hover:opacity-90">Áp Dụng</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-accent-beige p-6 rounded-md h-fit">
            <h2 className="text-xl font-bold mb-6 text-neutral-text">Tổng Đơn Hàng</h2>
            <div className="space-y-3 mb-6 text-gray-700">
              <div className="flex justify-between">
                <span>Tổng tiền hàng</span>
                <span>500.000₫</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển</span>
                <span>30.000₫</span>
              </div>
              <div className="flex justify-between">
                <span>Thuế</span>
                <span>50.000₫</span>
              </div>
              <div className="border-t border-accent-tan pt-3 mt-3 flex justify-between font-bold text-neutral-text">
                <span>Tổng cộng</span>
                <span>580.000₫</span>
              </div>
            </div>
            <button className="bg-warm-gold text-white w-full py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Tiến Hành Thanh Toán
            </button>
            <p className="mt-6 text-xs text-gray-500 text-center">Bằng việc tiếp tục, bạn đồng ý với các điều khoản dịch vụ của chúng tôi.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Cart;