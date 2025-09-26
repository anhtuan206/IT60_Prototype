import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Eye, EyeOff, User } from 'lucide-react';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return <div className="min-h-screen bg-orange-50 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 rounded-full w-16 h-16 flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center mb-8 text-amber-800">
              Đăng Ký Tài Khoản
            </h1>
            <form>
              <div className="mb-4">
                <label htmlFor="fullname" className="block mb-2 font-medium text-amber-800">
                  Họ và tên
                </label>
                <input type="text" id="fullname" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Nguyễn Văn A" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-amber-800">
                  Email
                </label>
                <input type="email" id="email" className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="email@example.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 font-medium text-amber-800">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} id="password" className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="••••••••" required />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block mb-2 font-medium text-amber-800">
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="••••••••" required />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className="mb-6">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded" required />
                  <span className="text-sm text-gray-600">
                    Tôi đồng ý với{' '}
                    <Link to="/terms" className="underline text-amber-600">
                      Điều khoản dịch vụ
                    </Link>{' '}
                    và{' '}
                    <Link to="/privacy" className="underline text-amber-600">
                      Chính sách bảo mật
                    </Link>
                  </span>
                </label>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-white py-3 px-4 mb-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Đăng Ký
              </button>
              <div className="text-center text-sm text-gray-600">
                <p>
                  Đã có tài khoản?{' '}
                  <Link to="/login" className="underline font-medium text-amber-600">
                    Đăng nhập
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Signup;