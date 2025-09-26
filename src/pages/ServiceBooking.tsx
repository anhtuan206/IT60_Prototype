import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { services } from './Services';

const ServiceBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    petName: '',
    petType: 'Chó',
    petBreed: '',
    petAge: '',
    petWeight: '',
    serviceDate: '',
    serviceTime: '',
    specialRequests: '',
    accommodationDays: '',
    groomingStyle: 'Cắt tỉa cơ bản'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmBooking = () => {
    navigate(`/services/${id}/booking/review`);
  };

  const handleGoBack = () => {
    navigate(`/services/${id}`);
  };

  const selectedService = services.find(s => s.id === id);

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-white text-amber-800 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold text-amber-800">Dịch vụ không tìm thấy</h1>
          <p>Rất tiếc, dịch vụ bạn đang tìm kiếm không tồn tại.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-amber-800 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-8">
          
          <h1 className="text-3xl font-bold text-amber-800">Đặt Lịch Dịch Vụ</h1>
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-between mb-8 border border-amber-300 bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              1
            </div>
            <span className="text-amber-800 font-medium">Chi Tiết</span>
          </div>
          <ChevronRight className="h-5 w-5 text-amber-600" />
          <div className="flex items-center">
            <div className="border border-amber-400 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              2
            </div>
            <span className="text-amber-700">Xem Lại</span>
          </div>
          <ChevronRight className="h-5 w-5 text-amber-600" />
          <div className="flex items-center">
            <div className="border border-amber-400 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              3
            </div>
            <span className="text-amber-700">Thanh Toán</span>
          </div>
        </div>

        {/* Notice Bar */}
        <div className="bg-orange-50 p-4 mb-8 border-l-4 border-amber-500 rounded-r-md">
          <p className="text-amber-800">Vui lòng điền đầy đủ thông tin để tiếp tục đặt lịch cho dịch vụ <strong className="text-amber-900">{selectedService.title}</strong>.</p>
        </div>

        {/* Selected Service Display */}
        <div className="bg-orange-50 p-6 mb-8 border border-amber-300 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-amber-800">Dịch Vụ Đã Chọn</h2>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-lg text-amber-900">{selectedService.title}</h3>
              <p className="text-sm text-amber-700 mt-1">{selectedService.type}</p>
            </div>
            <div className="text-xl font-bold text-amber-600">{selectedService.price}</div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Customer Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-800">Thông Tin Khách Hàng</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Họ và Tên*</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Nhập họ và tên đầy đủ"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Địa Chỉ Email*</label>
                <input
                  type="email"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Số Điện Thoại*</label>
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  placeholder="0123456789"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                />
              </div>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4 text-amber-800">Thông Tin Thú Cưng</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Tên Thú Cưng*</label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleInputChange}
                  placeholder="Tên thú cưng của bạn"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Loại Thú Cưng*</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleInputChange}
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                >
                  <option value="Chó">Chó</option>
                  <option value="Mèo">Mèo</option>
                  <option value="Thỏ">Thỏ</option>
                  <option value="Hamster">Hamster</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Giống</label>
                <input
                  type="text"
                  name="petBreed"
                  value={formData.petBreed}
                  onChange={handleInputChange}
                  placeholder="VD: Golden Retriever, Mèo Ba Tư..."
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Tuổi</label>
                <input
                  type="number"
                  name="petAge"
                  value={formData.petAge}
                  onChange={handleInputChange}
                  placeholder="VD: 2"
                  min="0"
                  max="30"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Cân Nặng (kg)</label>
                <input
                  type="number"
                  name="petWeight"
                  value={formData.petWeight}
                  onChange={handleInputChange}
                  placeholder="VD: 15"
                  min="0.1"
                  step="0.1"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Date/Time & Special Requests */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-amber-800">Ngày & Giờ</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Ngày*</label>
                <input
                  type="date"
                  name="serviceDate"
                  value={formData.serviceDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-amber-800 font-medium">Thời Gian*</label>
                <input
                  type="time"
                  name="serviceTime"
                  value={formData.serviceTime}
                  onChange={handleInputChange}
                  min="08:00"
                  max="18:00"
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  required
                />
              </div>

              {/* Service-specific fields */}
              {(selectedService.title.includes('Lưu trú') || selectedService.title.includes('Walk & Playtime')) && (
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Thời Gian Lưu Trú (ngày)</label>
                  <input
                    type="number"
                    name="accommodationDays"
                    value={formData.accommodationDays}
                    onChange={handleInputChange}
                    min="1"
                    max="30"
                    placeholder="VD: 3 ngày"
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  />
                </div>
              )}

              {selectedService.title.includes('Grooming') && (
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Kiểu Cắt Tỉa</label>
                  <select
                    name="groomingStyle"
                    value={formData.groomingStyle}
                    onChange={handleInputChange}
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                  >
                    <option value="Cắt tỉa cơ bản">Cắt tỉa cơ bản (+0 VNĐ)</option>
                    <option value="Cắt tỉa cao cấp">Cắt tỉa cao cấp (+100.000 VNĐ)</option>
                    <option value="Tạo kiểu đặc biệt">Tạo kiểu đặc biệt (+200.000 VNĐ)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block mb-1 text-amber-800 font-medium">Yêu Cầu Đặc Biệt</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder={`Ghi chú đặc biệt cho ${selectedService.title}:\n\n• Tình trạng sức khỏe\n• Thói quen ăn uống\n• Thuốc đang sử dụng\n• Yêu cầu khác...`}
                  className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 h-32 rounded resize-none"
                ></textarea>
              </div>
            </div>

            {/* Service Information */}
            <div className="mt-8 p-4 bg-orange-50 border border-amber-300 rounded-lg">
              <h3 className="font-bold mb-2 text-amber-800">Thông Tin Dịch Vụ</h3>
              <div className="text-sm text-amber-700">
                <p><strong>Bao gồm:</strong> {selectedService.description.includes}</p>
                <p className="mt-2"><strong>Thời gian:</strong> {selectedService.description.duration}</p>
                <p className="mt-2"><strong>Yêu cầu:</strong> {selectedService.description.requirements}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleConfirmBooking}
            className="bg-amber-500 text-white px-8 py-3 rounded-md hover:bg-amber-600 transition-colors font-semibold"
          >
            Xác Nhận Đặt Lịch
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handleGoBack}
            className="border border-amber-500 text-amber-600 px-8 py-3 font-medium rounded hover:bg-amber-500 hover:text-white transition-colors"
          >
            Hủy Đặt Lịch
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceBooking;