import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
const Booking = () => {
  return <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-neutral-text">Đặt Lịch Dịch Vụ</h1>
        {/* Steps Indicator */}
        <div className="flex justify-between items-center mb-8 p-4 rounded-lg bg-gray-50">
          <div className="flex items-center text-warm-brown font-semibold">
            <div className="bg-warm-gold text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
              1
            </div>
            <span>Chi Tiết</span>
          </div>
          <ChevronRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center text-gray-500">
            <div className="border-2 border-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-3">
              2
            </div>
            <span>Xem Lại</span>
          </div>
          <ChevronRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center text-gray-500">
            <div className="border-2 border-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-3">
              3
            </div>
            <span>Thanh Toán</span>
          </div>
        </div>
        {/* Notice Bar */}
        <div className="bg-accent-beige p-4 mb-8 border-l-4 border-warm-gold rounded-r-lg">
          <p className="text-neutral-text">Vui lòng điền đầy đủ thông tin để tiếp tục đặt lịch.</p>
        </div>
        {/* Booking Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Customer Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-neutral-text">Thông Tin Khách Hàng</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-neutral-text">Họ và Tên*</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Địa Chỉ Email*</label>
                <input type="email" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Số Điện Thoại*</label>
                <input type="tel" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" />
              </div>
            </div>
            <h2 className="text-xl font-bold mt-8 mb-4 text-neutral-text">Thông Tin Thú Cưng</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-neutral-text">Tên Thú Cưng*</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Loại Thú Cưng*</label>
                <select className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent">
                  <option>Chó</option>
                  <option>Mèo</option>
                  <option>Khác</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Giống</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" />
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Tuổi</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" />
              </div>
            </div>
          </div>
          {/* Right Column - Service Selection & Date/Time */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-neutral-text">Chọn Dịch Vụ</h2>
            <div className="space-y-3">
              <label htmlFor="service1" className="border border-gray-300 p-3 flex items-center rounded-md hover:border-warm-gold cursor-pointer has-[:checked]:bg-light-brown has-[:checked]:border-warm-gold">
                <input type="radio" id="service1" name="service" className="mr-3 h-4 w-4 text-warm-gold focus:ring-warm-gold" />
                <div className="flex-grow">
                  <span className="block font-medium text-neutral-text">Dịch vụ Lưu trú (Khách sạn)</span>
                  <span className="text-sm text-gray-600">200.000 VNĐ/đêm</span>
                </div>
              </label>
              <label htmlFor="service2" className="border border-gray-300 p-3 flex items-center rounded-md hover:border-warm-gold cursor-pointer has-[:checked]:bg-light-brown has-[:checked]:border-warm-gold">
                <input type="radio" id="service2" name="service" className="mr-3 h-4 w-4 text-warm-gold focus:ring-warm-gold" />
                <div className="flex-grow">
                  <span className="block font-medium text-neutral-text">Dịch vụ Spa & Grooming (Tắm và Cắt tỉa lông)</span>
                  <span className="text-sm text-gray-600">450.000 VNĐ/lần</span>
                </div>
              </label>
              <label htmlFor="service3" className="border border-gray-300 p-3 flex items-center rounded-md hover:border-warm-gold cursor-pointer has-[:checked]:bg-light-brown has-[:checked]:border-warm-gold">
                <input type="radio" id="service3" name="service" className="mr-3 h-4 w-4 text-warm-gold focus:ring-warm-gold" />
                <div className="flex-grow">
                  <span className="block font-medium text-neutral-text">Dịch vụ Vận động & Vui chơi (Walk & Playtime)</span>
                  <span className="text-sm text-gray-600">100.000 VNĐ/lần</span>
                </div>
              </label>
            </div>
            <h2 className="text-xl font-bold mt-8 mb-4 text-neutral-text">Ngày & Giờ</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-neutral-text">Ngày*</label>
                <div className="relative">
                  <input type="text" className="w-full border border-gray-300 p-2 pl-10 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" placeholder="DD/MM/YYYY" />
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Thời Gian*</label>
                <div className="relative">
                  <input type="text" className="w-full border border-gray-300 p-2 pl-10 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent" placeholder="Chọn giờ" />
                  <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-neutral-text">Yêu Cầu Đặc Biệt</label>
                <textarea className="w-full border border-gray-300 p-2 h-24 rounded-md focus:ring-2 focus:ring-warm-gold focus:border-transparent"></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button className="bg-warm-gold text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">
            Xác Nhận Đặt Lịch
          </button>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Booking;