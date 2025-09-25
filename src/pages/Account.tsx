import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Package, Calendar, Settings, LogOut } from 'lucide-react';

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-neutral-text flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-neutral-text">Tài Khoản Của Tôi</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center mb-6">
                <img src="https://placehold.co/100x100?text=User" alt="User Avatar" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-xl font-bold text-neutral-text">Nguyễn Văn A</h2>
                <p className="text-sm text-gray-500">nguyenvana@email.com</p>
              </div>
              <div className="space-y-2">
                <a href="#profile" className="flex items-center p-3 rounded-md text-neutral-text hover:bg-accent-beige font-medium">
                  <User className="h-5 w-5 mr-3" />
                  <span>Hồ Sơ</span>
                </a>
                <a href="#orders" className="flex items-center p-3 rounded-md text-neutral-text bg-accent-beige font-medium">
                  <Package className="h-5 w-5 mr-3" />
                  <span>Đơn Hàng & Lịch Sử</span>
                </a>
                <a href="#bookings" className="flex items-center p-3 rounded-md text-neutral-text hover:bg-accent-beige font-medium">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Lịch Hẹn</span>
                </a>
                <a href="#settings" className="flex items-center p-3 rounded-md text-neutral-text hover:bg-accent-beige font-medium">
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Cài Đặt</span>
                </a>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <a href="#logout" className="flex items-center p-3 rounded-md text-gray-500 hover:bg-accent-beige font-medium">
                    <LogOut className="h-5 w-5 mr-3" />
                    <span>Đăng Xuất</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Orders & History */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6 text-neutral-text">Đơn Hàng & Lịch Sử</h2>
              {/* Order Items */}
              <div className="space-y-4">
                {[1, 2].map(order => (
                  <div key={order} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="font-semibold text-neutral-text">Đơn Hàng #{order}12345</span>
                        <span className="text-sm text-gray-500 ml-4">Ngày {order}/6/2023</span>
                      </div>
                      <span className={`px-3 py-1 text-sm rounded-full ${order === 1 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {order === 1 ? 'Đã Giao' : 'Đang Xử Lý'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <img src={`https://placehold.co/100x100?text=Product+${order}`} alt="Product Image" className="w-16 h-16 rounded-md object-cover" />
                      <div className="ml-4">
                        <p className="font-medium text-neutral-text">Sản phẩm {order}</p>
                        <p className="text-sm text-gray-500">Số lượng: 1</p>
                      </div>
                      <div className="ml-auto">
                        <button className="border border-gray-300 text-neutral-text px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                          Xem Chi Tiết
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upcoming Bookings */}
              <h2 className="text-xl font-bold mt-8 mb-6 text-neutral-text">Lịch Hẹn Sắp Tới</h2>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-semibold text-neutral-text">Dịch Vụ Cắt Tỉa</span>
                    <span className="text-sm text-gray-500 ml-4">15/6/2023 - 10:00 AM</span>
                  </div>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                    Đã Xác Nhận
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-medium text-neutral-text">Thú cưng: Milo</p>
                    <p className="text-sm text-gray-500">Ghi chú: Không có</p>
                  </div>
                  <div className="ml-auto">
                    <button className="border border-gray-300 text-neutral-text px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                      Đổi Lịch
                    </button>
                  </div>
                </div>
              </div>

              {/* Update Button */}
              <div className="mt-8 text-right">
                <button className="bg-primary-blue text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
                  Cập Nhật Hồ Sơ
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;