import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-accent-beige w-full py-12 mt-16 text-neutral-text">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PET HOTEL</h3>
            <p className="text-sm">
              Nơi cung cấp dịch vụ chăm sóc và lưu trú tốt nhất cho những người bạn bốn chân của bạn.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Đường Dẫn Nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-warm-brown">Trang Chủ</Link></li>
              <li><Link to="/services" className="hover:text-warm-brown">Dịch Vụ</Link></li>
              <li><Link to="/products" className="hover:text-warm-brown">Sản Phẩm</Link></li>
              <li><Link to="/booking" className="hover:text-warm-brown">Đặt Lịch</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Đường ABC, TP. Hồ Chí Minh</li>
              <li>(028) 1234 5678</li>
              <li>contact@pethotel.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Bản Tin</h3>
            <p className="text-sm mb-2">Đăng ký để nhận tin tức và ưu đãi mới nhất.</p>
            <div className="flex">
              <input type="email" placeholder="Email của bạn" className="border border-gray-300 p-2 flex-grow rounded-l-md" />
              <button className="bg-warm-gold text-white p-2 rounded-r-md hover:opacity-90">Đăng Ký</button>
            </div>
          </div>
        </div>
        <div className="border-t border-accent-tan mt-8 pt-6 text-sm text-center text-gray-500">
          <p>© 2025 Pet Hotel. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;