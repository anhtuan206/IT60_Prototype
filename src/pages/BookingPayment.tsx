import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronRight, CreditCard, Shield, Clock } from 'lucide-react';
import { services } from './Services';

const BookingPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          alert('Phiên thanh toán đã hết hạn. Vui lòng thử lại.');
          navigate(`/services/${id}/booking`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, id]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').substr(0, 19);
    }

    // Format expiry date
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1/').substr(0, 5);
    }

    // Format CVV
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substr(0, 4);
    }

    setPaymentData(prev => ({ ...prev, [name]: formattedValue }));
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
    navigate(`/services/${id}/booking/review`);
  };

  const handleConfirmPayment = () => {
    // Validate form
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardHolder) {
      alert('Vui lòng điền đầy đủ thông tin thanh toán.');
      return;
    }

    // Simulate payment processing
    const confirmPayment = window.confirm(
      `Xác nhận thanh toán ${parseInt(selectedService.price.replace(/[^0-9]/g, '')) + 20000} VNĐ cho dịch vụ ${selectedService.title}?`
    );

    if (confirmPayment) {
      // In a real app, this would process payment and redirect to success page
      alert('Đã đặt lịch thành công! Cảm ơn bạn đã tin tưởng Pet Hotel.');
      navigate(`/`);
    }
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
              ✓
            </div>
            <span className="text-amber-800 font-medium">Xem Lại</span>
          </div>
          <ChevronRight className="h-5 w-5 text-amber-600" />
          <div className="flex items-center">
            <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              3
            </div>
            <span className="text-amber-800 font-medium">Thanh Toán</span>
          </div>
        </div>

        {/* Notice Bar */}
        <div className="bg-orange-50 p-4 mb-8 border-l-4 border-amber-500 rounded-r-md">
          <p className="text-amber-800">Thông tin thanh toán được bảo mật bằng mã hóa SSL 256-bit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-amber-800">Phương Thức Thanh Toán</h2>
              <div className="space-y-3">
                <div className="border border-amber-400 bg-white p-4 flex items-center rounded">
                  <input type="radio" id="credit-card" name="payment" className="mr-3" defaultChecked />
                  <CreditCard className="w-5 h-5 mr-2 text-amber-600" />
                  <label htmlFor="credit-card" className="flex-grow">
                    <span className="block font-medium text-amber-800">Thẻ Tín Dụng / Ghi Nợ</span>
                    <span className="text-sm text-amber-600">Visa, MasterCard, JCB</span>
                  </label>
                </div>
                <div className="border border-amber-200 p-4 flex items-center opacity-50 rounded">
                  <input type="radio" id="bank-transfer" name="payment" className="mr-3" disabled />
                  <div className="w-5 h-5 mr-2 bg-amber-300"></div>
                  <label htmlFor="bank-transfer" className="flex-grow">
                    <span className="block font-medium text-amber-600">Chuyển Khoản Ngân Hàng</span>
                    <span className="text-sm text-amber-500">Sắp có</span>
                  </label>
                </div>
                <div className="border border-amber-200 p-4 flex items-center opacity-50 rounded">
                  <input type="radio" id="e-wallet" name="payment" className="mr-3" disabled />
                  <div className="w-5 h-5 mr-2 bg-amber-300"></div>
                  <label htmlFor="e-wallet" className="flex-grow">
                    <span className="block font-medium text-amber-600">Ví Điện Tử</span>
                    <span className="text-sm text-amber-500">MoMo, ZaloPay</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Card Information */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-800">Thông Tin Thẻ</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Số Thẻ*</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">Ngày Hết Hạn*</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">CVV*</label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handleInputChange}
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                      placeholder="123"
                      maxLength="4"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Tên Chủ Thẻ*</label>
                  <input
                    type="text"
                    name="cardHolder"
                    value={paymentData.cardHolder}
                    onChange={handleInputChange}
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                    placeholder="VD: NGUYEN VAN A"
                    style={{textTransform: 'uppercase'}}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary & Security */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-800">Tổng Kết Đơn Hàng</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-amber-800">
                  <span>Dịch vụ:</span>
                  <span className="text-amber-900 text-sm">{selectedService.title}</span>
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
                  <span>Tổng thanh toán:</span>
                  <span className="text-amber-900">{parseInt(selectedService.price.replace(/[^0-9]/g, '')) + 20000} VNĐ</span>
                </div>
              </div>

              {/* Session Timer */}
              <div className="mt-4 p-3 bg-amber-50 border border-amber-300 rounded">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-amber-600" />
                  <span className="text-sm text-amber-800">Thời gian còn lại: {formatTime(timeLeft)}</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-2 text-amber-600" />
                <h3 className="font-bold text-amber-800">Bảo Mật Thanh Toán</h3>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• Mã hóa SSL 256-bit - Bảo mật tối đa</li>
                <li>• Tuân thủ chuẩn PCI DSS</li>
                <li>• Không lưu trữ thông tin thẻ</li>
                <li>• Xác thực 3D Secure tự động</li>
                <li>• Giám sát giao dịch 24/7</li>
              </ul>
            </div>

            {/* Terms */}
            <div className="bg-orange-50 p-4 border border-amber-300 rounded-lg">
              <label className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1" required />
                <span className="text-sm text-amber-800">
                  Tôi đồng ý với <u className="text-amber-900">Điều khoản dịch vụ</u> và <u className="text-amber-900">Chính sách bảo mật</u> của Pet Hotel.
                </span>
              </label>
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
            onClick={handleConfirmPayment}
            className="bg-amber-500 text-white px-8 py-3 font-medium rounded hover:bg-amber-600 transition-colors"
          >
            Xác Nhận Thanh Toán
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPayment;