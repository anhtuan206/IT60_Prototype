import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronRight, Edit2 } from 'lucide-react';
import { services } from './Services';

const BookingReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Sample booking data - in a real app, this would come from form state or API
  const sampleBookingData = {
    customerName: 'Nguyễn Văn A',
    customerEmail: 'nguyenvana@email.com',
    customerPhone: '0123456789',
    petName: 'Mun',
    petType: 'Chó',
    petBreed: 'Golden Retriever',
    petAge: '2 tuổi',
    petWeight: '15 kg',
    serviceDate: '25/09/2024',
    serviceTime: '10:00 AM',
    specialRequests: 'Thú cưng khá nhút nhát, cần người chăm sóc nhẹ nhàng và kiên nhẫn. Àn nhiều vào buổi sáng, thích chơi bóng.'
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

  const handleGoBack = () => {
    navigate(`/services/${id}/booking`);
  };

  const handleProceedToPayment = () => {
    navigate(`/services/${id}/booking/payment`);
  };

  const handleEditDetails = () => {
    navigate(`/services/${id}/booking`);
  };

  return (
    <div className="min-h-screen bg-white text-amber-800 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-amber-800">Đặt Lịch Dịch Vụ</h1>

        {/* Steps Indicator */}
        <div className="flex justify-between mb-8 border border-amber-300 bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              ✓
            </div>
            <span className="text-amber-800 font-medium">Chi Tiết</span>
          </div>
          <ChevronRight className="h-5 w-5 text-amber-600" />
          <div className="flex items-center">
            <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              2
            </div>
            <span className="text-amber-800 font-medium">Xem Lại</span>
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
          <p className="text-amber-800">Vui lòng kiểm tra lại thông tin trước khi tiến hành thanh toán.</p>
        </div>

        {/* Review Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-amber-800">Thông Tin Khách Hàng</h2>
                <button
                  onClick={handleEditDetails}
                  className="flex items-center text-sm border border-amber-500 text-amber-600 hover:bg-amber-100 px-3 py-1 rounded transition-colors"
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Chỉnh sửa
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Họ và Tên</span>
                  <p className="text-amber-900">{sampleBookingData.customerName}</p>
                </div>
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Email</span>
                  <p className="text-amber-900">{sampleBookingData.customerEmail}</p>
                </div>
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Số Điện Thoại</span>
                  <p className="text-amber-900">{sampleBookingData.customerPhone}</p>
                </div>
              </div>
            </div>

            {/* Pet Information */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-amber-800">Thông Tin Thú Cưng</h2>
                <button
                  onClick={handleEditDetails}
                  className="flex items-center text-sm border border-amber-500 text-amber-600 hover:bg-amber-100 px-3 py-1 rounded transition-colors"
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Chỉnh sửa
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Tên Thú Cưng</span>
                  <p className="text-amber-900">{sampleBookingData.petName}</p>
                </div>
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Loại</span>
                  <p className="text-amber-900">{sampleBookingData.petType}</p>
                </div>
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Giống</span>
                  <p className="text-amber-900">{sampleBookingData.petBreed}</p>
                </div>
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Tuổi</span>
                  <p className="text-amber-900">{sampleBookingData.petAge} - {sampleBookingData.petWeight}</p>
                </div>
              </div>
            </div>

            {/* Service & Schedule */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-amber-800">Dịch Vụ & Lịch Hẹn</h2>
                <button
                  onClick={handleEditDetails}
                  className="flex items-center text-sm border border-amber-500 text-amber-600 hover:bg-amber-100 px-3 py-1 rounded transition-colors"
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  Chỉnh sửa
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Dịch Vụ</span>
                  <p className="text-amber-900">{selectedService.title}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm text-amber-700 mb-1 font-medium">Ngày</span>
                    <p className="text-amber-900">{sampleBookingData.serviceDate}</p>
                  </div>
                  <div>
                    <span className="block text-sm text-amber-700 mb-1 font-medium">Thời Gian</span>
                    <p className="text-amber-900">{sampleBookingData.serviceTime}</p>
                  </div>
                </div>
                <div>
                  <span className="block text-sm text-amber-700 mb-1 font-medium">Yêu Cầu Đặc Biệt</span>
                  <p className="text-amber-900">{sampleBookingData.specialRequests}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-amber-800">Tổng Kết Đơn Hàng</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-amber-800">
                  <span>Dịch vụ:</span>
                  <span className="text-amber-900">{selectedService.title}</span>
                </div>
                <div className="flex justify-between text-amber-800">
                  <span>Giá dịch vụ:</span>
                  <span className="text-amber-900">{selectedService.price}</span>
                </div>
                <div className="flex justify-between text-amber-800">
                  <span>Phí xử lý:</span>
                  <span className="text-amber-900">20.000 VNĐ</span>
                </div>
                <hr className="border-amber-300" />
                <div className="flex justify-between font-bold text-lg text-amber-800">
                  <span>Tổng cộng:</span>
                  <span className="text-amber-900">{parseInt(selectedService.price.replace(/[^0-9]/g, '')) + 20000} VNĐ</span>
                </div>
              </div>
            </div>

            {/* Policy Notice */}
            <div className="bg-orange-50 p-4 border border-amber-300 rounded-lg">
              <h3 className="font-bold mb-2 text-amber-800">Chính Sách Hủy</h3>
              <p className="text-sm text-amber-700">Quý khách có thể hủy lịch hẹn trước 24 giờ để được hoàn tiền 100%.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleGoBack}
            className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded transition-colors"
          >
            Quay Lại
          </button>
          <button
            onClick={handleProceedToPayment}
            className="bg-amber-500 text-white px-8 py-3 rounded hover:bg-amber-600 transition-colors font-semibold"
          >
            Tiến Hành Thanh Toán
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingReview;