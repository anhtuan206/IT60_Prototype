import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
const Header = () => {
  const location = useLocation();
  const isAccountOrCart = location.pathname === '/account' || location.pathname === '/cart' || location.pathname === '/orders' || location.pathname === '/bookings' || location.pathname === '/pets';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const navLinks = <>
      <Link to="/services" className="text-amber-800 hover:text-amber-600 transition-colors block md:inline-block py-2 md:py-0">Dịch Vụ</Link>
      <Link to="/products" className="text-amber-800 hover:text-amber-600 transition-colors block md:inline-block py-2 md:py-0">Sản Phẩm</Link>
      <Link to="/booking" className="text-amber-800 hover:text-amber-600 transition-colors block md:inline-block py-2 md:py-0">Đặt Lịch</Link>
      <Link to="/contact" className="text-amber-800 hover:text-amber-600 transition-colors block md:inline-block py-2 md:py-0">Liên Hệ</Link>
    </>;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);
  return <header className="bg-white w-full py-4 relative shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl z-20 text-amber-800">
          PET HOTEL
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks}
        </nav>

        <div className="flex items-center space-x-4 z-20">
          <Link to="/cart" className="p-1 text-amber-800">
            <ShoppingCart className="h-5 w-5" />
          </Link>

          {isAccountOrCart ? <div className="relative" ref={profileMenuRef}>
              <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center space-x-1 text-amber-800">
                <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=A0522D&color=fff&size=32" alt="User Avatar" className="w-8 h-8 rounded-full" />
                <ChevronDown className={`h-4 w-4 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileMenuOpen && <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-3 px-4 border-b border-gray-200">
                    <p className="font-medium text-amber-800">Nguyễn Văn A</p>
                    <p className="text-sm text-gray-500">nguyenvana@email.com</p>
                  </div>
                  <div className="py-1">
                    <Link to="/account" className="block px-4 py-2 text-amber-800 hover:bg-orange-50" onClick={() => setIsProfileMenuOpen(false)}>Tài khoản của tôi</Link>
                    <Link to="/orders" className="block px-4 py-2 text-amber-800 hover:bg-orange-50" onClick={() => setIsProfileMenuOpen(false)}>Đơn hàng</Link>
                    <Link to="/bookings" className="block px-4 py-2 text-amber-800 hover:bg-orange-50" onClick={() => setIsProfileMenuOpen(false)}>Lịch hẹn</Link>
                    <Link to="/pets" className="block px-4 py-2 text-amber-800 hover:bg-orange-50" onClick={() => setIsProfileMenuOpen(false)}>Thú cưng của tôi</Link>
                  </div>
                  <div className="py-1 border-t border-gray-200">
                    <Link to="/" className="block px-4 py-2 text-amber-800 hover:bg-orange-50" onClick={() => setIsProfileMenuOpen(false)}>Đăng xuất</Link>
                  </div>
                </div>}
            </div> : <div className="hidden sm:flex items-center space-x-2">
              <Link to="/login" className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-500 hover:text-white transition-colors">Đăng Nhập</Link>
              <Link to="/signup" className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">Đăng Ký</Link>
            </div>}

          {/* Mobile Menu Button */}
          <button className="md:hidden p-1 text-amber-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 z-10">
            <nav className="container mx-auto px-4 pt-2 pb-4 flex flex-col space-y-2">
                {navLinks}
                <div className="sm:hidden pt-4 border-t border-gray-200">
                  {isAccountOrCart ? <div className="space-y-3">
                      <div className="flex items-center space-x-3 px-2">
                        <img src="https://ui-avatars.com/api/?name=Nguyen+Van+A&background=A0522D&color=fff&size=40" alt="User Avatar" className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="font-medium text-amber-800">Nguyễn Văn A</p>
                          <Link to="/account" className="text-sm text-amber-600 hover:underline">Xem tài khoản</Link>
                        </div>
                      </div>
                      <Link to="/" className="block border border-gray-300 text-amber-800 py-2 text-center rounded-md">Đăng Xuất</Link>
                    </div> : <div className="flex flex-col space-y-2">
                      <Link to="/login" className="border border-amber-500 text-amber-500 py-2 text-center rounded-md">Đăng Nhập</Link>
                      <Link to="/signup" className="bg-amber-500 text-white py-2 text-center rounded-md">Đăng Ký</Link>
                    </div>}
                </div>
            </nav>
        </div>}
    </header>;
};
export default Header;