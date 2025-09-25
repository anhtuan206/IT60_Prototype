import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-beige p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-text mb-2">PET HOTEL</h1>
          <p className="text-gray-500">Trang Quản Trị</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-text">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent" 
              placeholder="admin@example.com" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral-text">
              Mật khẩu
            </label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent" 
              placeholder="••••••••" 
            />
          </div>
          <Link 
            to="/admin" 
            className="w-full bg-primary-blue text-white py-3 px-4 rounded-md flex justify-center font-semibold hover:opacity-90 transition-opacity"
          >
            Đăng nhập
          </Link>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-primary-blue hover:underline">
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;