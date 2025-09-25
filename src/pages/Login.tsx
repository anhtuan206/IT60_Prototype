import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Eye, EyeOff, User } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-accent-beige flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-warm-gold rounded-full w-16 h-16 flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center mb-8 text-neutral-text">Đăng Nhập</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-neutral-text">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-warm-gold focus:border-transparent" 
                  placeholder="email@example.com" 
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 font-medium text-neutral-text">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    id="password" 
                    className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:ring-2 focus:ring-warm-gold focus:border-transparent" 
                    placeholder="••••••••" 
                    required 
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-warm-brown"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="mt-2 text-right">
                  <Link to="/forgot-password" className="text-sm text-warm-brown hover:underline">
                    Quên mật khẩu?
                  </Link>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-warm-gold text-white py-3 px-4 mb-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Đăng Nhập
              </button>
              <div className="text-center text-sm text-gray-600">
                <p>
                  Chưa có tài khoản?{' '}
                  <Link to="/signup" className="underline font-medium text-warm-brown">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
            </form>
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc đăng nhập với
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button type="button" className="w-full border border-gray-300 py-2 px-4 rounded-lg flex justify-center items-center hover:bg-gray-50">
                  Google
                </button>
                <button type="button" className="w-full border border-gray-300 py-2 px-4 rounded-lg flex justify-center items-center hover:bg-gray-50">
                  Facebook
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

export default Login;