import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceBooking from './pages/ServiceBooking';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import BookingReview from './pages/BookingReview';
import BookingPayment from './pages/BookingPayment';
import Cart from './pages/Cart';
import CartPayment from './pages/CartPayment';
import Account from './pages/Account';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
// Admin Routes
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminServicesList from './pages/admin/services/AdminServicesList';
import AdminServiceForm from './pages/admin/services/AdminServiceForm';
import AdminProductsList from './pages/admin/products/AdminProductsList';
import AdminProductForm from './pages/admin/products/AdminProductForm';
import AdminOrdersList from './pages/admin/orders/AdminOrdersList';
import AdminOrderDetail from './pages/admin/orders/AdminOrderDetail';
import AdminAppointmentsList from './pages/admin/appointments/AdminAppointmentsList';
import AdminAppointmentDetail from './pages/admin/appointments/AdminAppointmentDetail';
import AdminUsersList from './pages/admin/users/AdminUsersList';
import AdminUserDetail from './pages/admin/users/AdminUserDetail';
import AdminSettings from './pages/admin/settings/AdminSettings';
import AdminActivityLog from './pages/admin/activity/AdminActivityLog';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/services/:id/booking" element={<ServiceBooking />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/services/:id/booking/review" element={<BookingReview />} />
        <Route path="/services/:id/booking/payment" element={<BookingPayment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payment" element={<CartPayment />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<AdminServicesList />} />
        <Route path="/admin/services/new" element={<AdminServiceForm />} />
        <Route path="/admin/services/edit/:id" element={<AdminServiceForm />} />
        <Route path="/admin/products" element={<AdminProductsList />} />
        <Route path="/admin/products/new" element={<AdminProductForm />} />
        <Route path="/admin/products/edit/:id" element={<AdminProductForm />} />
        <Route path="/admin/orders" element={<AdminOrdersList />} />
        <Route path="/admin/orders/:id" element={<AdminOrderDetail />} />
        <Route path="/admin/appointments" element={<AdminAppointmentsList />} />
        <Route path="/admin/appointments/:id" element={<AdminAppointmentDetail />} />
        <Route path="/admin/users" element={<AdminUsersList />} />
        <Route path="/admin/users/new" element={<AdminUserDetail />} />
        <Route path="/admin/users/edit/:id" element={<AdminUserDetail />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/activity" element={<AdminActivityLog />} />
      </Routes>
    </BrowserRouter>;
}