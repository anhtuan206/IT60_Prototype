import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import { services } from './Services';
import { products } from './Products';
const Home = () => {
  return <div className="min-h-screen bg-white text-neutral-text flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <img
      // src="https://t4.ftcdn.net/jpg/03/28/88/41/360_F_328884184_zcbmGh4NlFLhrRWj83fTDQsQLYY6bbvQ.jpg" 
      src="https://www.petsaveorg.com/home-page/banner.jpg" alt="Happy dog at a pet hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg">
            Chăm Sóc Toàn Diện, Yêu Thương Hết Mực
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8">
            Trải nghiệm dịch vụ khách sạn thú cưng cao cấp, nơi những người bạn bốn chân được quan tâm như ở nhà.
          </p>
          <Link to="/booking" className="bg-warm-gold text-white px-8 py-3 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">
            Đặt Lịch Ngay
          </Link>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Dịch Vụ Nổi Bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map(service => <ServiceCard key={service.id} id={service.id} title={service.title} price={service.price} image={service.image} />)}
        </div>
      </section>

      {/* Best-selling Products */}
      <section className="py-16 bg-accent-beige">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
            Sản Phẩm Bán Chạy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />)}
            </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-gray-700">
                "Lần đầu tiên gửi bé Milo ở Pet Hotel mà mình an tâm thực sự. Dịch vụ chuyên nghiệp, các bạn nhân viên nhiệt tình, bé về nhà vui vẻ, khỏe mạnh. Chắc chắn sẽ quay lại!"
            </blockquote>
            <p className="font-medium mt-6 text-neutral-text">— Chị An, khách hàng hài lòng</p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;