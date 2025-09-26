import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
const Contact = () => {
  return <div className="min-h-screen bg-white text-amber-800 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Liên Hệ Với Chúng Tôi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-orange-50 rounded-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-amber-800">Gửi Tin Nhắn</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Họ và Tên*</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email*</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Chủ đề</label>
                <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Nội dung tin nhắn*</label>
                <textarea id="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md" required></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">Gửi</button>
            </form>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6 text-amber-800">Thông Tin Liên Hệ</h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <MapPin size={24} className="mr-4 mt-1 text-amber-600" />
                        <div>
                            <h3 className="font-medium text-lg">Địa chỉ</h3>
                            <p className="text-gray-700">123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Phone size={24} className="mr-4 mt-1 text-amber-600" />
                        <div>
                            <h3 className="font-medium text-lg">Điện thoại</h3>
                            <p className="text-gray-700">(028) 1234 5678</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Mail size={24} className="mr-4 mt-1 text-amber-600" />
                        <div>
                            <h3 className="font-medium text-lg">Email</h3>
                            <p className="text-gray-700">contact@pethotel.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-6 text-amber-800">Bản Đồ</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447176339033!2d106.6954304147498!3d10.77698999232085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a3935c07d%3A0x2843a2f6e6f2f4b!2sBen%20Thanh%20Market!5e0!3m2!1sen!2s!4v1678886 Ben Thanh Market location" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Contact;