import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CreditCard, Shield, Clock, Truck, ArrowLeft } from 'lucide-react';

const CartPayment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Shipping Info
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Hồ Chí Minh',
    district: '',
    postalCode: '',
    shippingNotes: '',
    // Payment Info
    shippingMethod: 'standard',
    paymentMethod: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          alert('Phiên thanh toán đã hết hạn.');
          navigate('/cart');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').substr(0, 19);
    }
    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1/').substr(0, 5);
    }
    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substr(0, 4);
    }
    if (name === 'cardHolder') {
      formattedValue = value.toUpperCase();
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handleGoBack = () => {
    navigate('/cart');
  };

  const handleConfirmPayment = () => {
    // Validate required fields
    const requiredFields = ['fullName', 'phone', 'email', 'address', 'district'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }

    if (formData.paymentMethod === 'credit-card') {
      const cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardHolder'];
      const missingCardFields = cardFields.filter(field => !formData[field as keyof typeof formData]);
      if (missingCardFields.length > 0) {
        alert('Vui lòng điền đầy đủ thông tin thẻ.');
        return;
      }
    }

    const confirmPayment = window.confirm('Xác nhận đặt hàng với tổng tiền 580.000₫?');
    if (confirmPayment) {
      alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Pet Hotel.');
      navigate('/');
    }
  };

  // Real cart items from the cart page - matching Cart.tsx data
  const cartItems = [
    { id: 1, name: 'Khăn Tắm Siêu Thấm Hút', price: '50.000₫', quantity: 2, image: 'https://paddy.vn/cdn/shop/files/khan-tam-cho-meo-sieu-tham-hut.jpg?v=1692494975' },
    { id: 2, name: 'Xịt Khử Mùi & Khử Trùng Chuồng Nuôi (Pet-Safe)', price: '200.000₫', quantity: 2, image: 'https://fuwa.com.vn/wp-content/uploads/2024/02/xit-khu-mui-da-nang-31.jpg' },
  ];

  const subtotal = cartItems.reduce((sum, item) =>
    sum + (parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity), 0
  );
  const shippingFee = formData.shippingMethod === 'express' ? 80000 : 30000;
  const tax = Math.round(subtotal * 0.1); // 10% tax
  const codFee = formData.paymentMethod === 'cod' ? 20000 : 0;
  const total = subtotal + shippingFee + tax + codFee;

  return (
    <div className="min-h-screen bg-white text-amber-800 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-8">
          
          <h1 className="text-3xl font-bold text-amber-800">Thanh Toán</h1>
        </div>

        {/* Notice Bar */}
        <div className="bg-orange-50 p-4 mb-8 border-l-4 border-amber-500 rounded-r-md">
          <p className="text-amber-800">Thông tin thanh toán được bảo mật bằng mã hóa SSL 256-bit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-amber-800">Thông Tin Giao Hàng</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">Họ và Tên*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên đầy đủ"
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">Số Điện Thoại*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0123456789"
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Địa Chỉ*</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Số nhà, tên đường, phường/xã"
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">Thành Phố*</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                      required
                    >
                      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">Quận/Huyện*</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                      required
                    >
                      <option value="">Chọn quận/huyện</option>
                      <option value="Quận 1">Quận 1</option>
                      <option value="Quận 2">Quận 2</option>
                      <option value="Quận 3">Quận 3</option>
                      <option value="Quận 7">Quận 7</option>
                      <option value="Quận 10">Quận 10</option>
                      <option value="Bình Thạnh">Bình Thạnh</option>
                      <option value="Tân Bình">Tân Bình</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-amber-800 font-medium">Mã Bưu Điện</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="VD: 700000"
                      className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Ghi Chú Giao Hàng</label>
                  <textarea
                    name="shippingNotes"
                    value={formData.shippingNotes}
                    onChange={handleInputChange}
                    placeholder="VD: Giao hàng giờ hành chính, gọi cho người nhận trước..."
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 h-20 rounded resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-800">Phương Thức Giao Hàng</h3>
              <div className="space-y-3">
                <div className="border border-amber-400 bg-white p-4 flex items-center rounded">
                  <input
                    type="radio"
                    id="standard"
                    name="shippingMethod"
                    value="standard"
                    checked={formData.shippingMethod === 'standard'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <Truck className="w-5 h-5 mr-2 text-amber-600" />
                  <label htmlFor="standard" className="flex-grow">
                    <span className="block font-medium text-amber-800">Giao hàng tiêu chuẩn</span>
                    <span className="text-sm text-amber-600">3-5 ngày làm việc - 30.000₫</span>
                  </label>
                </div>
                <div className="border border-amber-400 bg-white p-4 flex items-center rounded">
                  <input
                    type="radio"
                    id="express"
                    name="shippingMethod"
                    value="express"
                    checked={formData.shippingMethod === 'express'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <Truck className="w-5 h-5 mr-2 text-amber-600" />
                  <label htmlFor="express" className="flex-grow">
                    <span className="block font-medium text-amber-800">Giao hàng nhanh</span>
                    <span className="text-sm text-amber-600">1-2 ngày làm việc - 80.000₫</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-800">Phương Thức Thanh Toán</h3>
              <div className="space-y-3">
                <div className="border border-amber-400 bg-white p-4 flex items-center rounded">
                  <input
                    type="radio"
                    id="credit-card"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <CreditCard className="w-5 h-5 mr-2 text-amber-600" />
                  <label htmlFor="credit-card" className="flex-grow">
                    <span className="block font-medium text-amber-800">Thẻ Tín Dụng / Ghi Nợ</span>
                    <span className="text-sm text-amber-600">Visa, MasterCard, JCB</span>
                  </label>
                </div>
                <div className="border border-amber-400 bg-white p-4 flex items-center rounded">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div className="w-5 h-5 mr-2 bg-amber-400 rounded flex items-center justify-center">
                    <span className="text-xs text-white font-bold">$</span>
                  </div>
                  <label htmlFor="cod" className="flex-grow">
                    <span className="block font-medium text-amber-800">Thanh toán khi nhận hàng (COD)</span>
                    <span className="text-sm text-amber-600">Phí COD: 20.000₫</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Card Information */}
            {formData.paymentMethod === 'credit-card' && (
              <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-amber-800">Thông Tin Thẻ</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-amber-800 font-medium">Số Thẻ*</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
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
                      value={formData.expiryDate}
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
                      value={formData.cvv}
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
                    value={formData.cardHolder}
                    onChange={handleInputChange}
                    className="w-full border border-amber-300 focus:border-amber-500 focus:outline-none p-2 rounded"
                    placeholder="VD: NGUYEN VAN A"
                    required
                  />
                </div>
              </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Order Items */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-800">Đơn Hàng Của Bạn</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-amber-200 pb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 mr-3 border border-amber-200 rounded object-cover"
                    />
                    <div className="flex-grow">
                      <h4 className="font-medium text-amber-900">{item.name}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-amber-700">Số lượng: {item.quantity}</span>
                        <span className="text-amber-900 font-medium">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border border-amber-300 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-800">Tổng Kết Đơn Hàng</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-amber-800">
                  <span>Tổng tiền hàng:</span>
                  <span className="text-amber-900">{subtotal.toLocaleString()} VNĐ</span>
                </div>
                <div className="flex justify-between text-amber-800">
                  <span>Phí vận chuyển:</span>
                  <span className="text-amber-900">{shippingFee.toLocaleString()} VNĐ</span>
                </div>
                <div className="flex justify-between text-amber-800">
                  <span>Thuế (10%):</span>
                  <span className="text-amber-900">{tax.toLocaleString()} VNĐ</span>
                </div>
                {codFee > 0 && (
                  <div className="flex justify-between text-amber-800">
                    <span>Phí COD:</span>
                    <span className="text-amber-900">{codFee.toLocaleString()} VNĐ</span>
                  </div>
                )}
                <hr className="border-amber-300" />
                <div className="flex justify-between font-bold text-lg text-amber-800">
                  <span>Tổng thanh toán:</span>
                  <span className="text-amber-900">{total.toLocaleString()} VNĐ</span>
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
                  Tôi đồng ý với <u className="text-amber-900">Điều khoản mua hàng</u> và <u className="text-amber-900">Chính sách bảo mật</u> của Pet Hotel.
                </span>
              </label>
            </div>

            {/* Payment Button */}
            <button
              onClick={handleConfirmPayment}
              className="bg-amber-500 hover:bg-amber-600 text-white w-full py-3 font-medium rounded transition-colors"
            >
              Xác Nhận Thanh Toán
            </button>
            <button
            onClick={handleGoBack}
            className="border border-amber-500 text-amber-600 w-full py-3 font-medium rounded hover:bg-amber-500 hover:text-white transition-colors"
          >
            Hủy Thanh Toán
          </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPayment;