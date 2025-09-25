import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';
import { services } from './Services'; // Import the services data

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-md">
      <button 
        className="w-full flex justify-between items-center p-4 text-left font-medium text-neutral-text" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-200 text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id); // Find the service by id

  if (!service) {
    return <div className="min-h-screen bg-white text-neutral-text flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-neutral-text">Dịch vụ không tìm thấy</h1>
        <p>Rất tiếc, dịch vụ bạn đang tìm kiếm không tồn tại.</p>
      </main>
      <Footer />
    </div>;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-text flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div>
            <img 
              src={service.image || `https://placehold.co/800x600?text=${service.title}`}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{service.title}</h1>
            <p className="text-gray-500 mb-4">Loại hình: {service.type}</p>
            
            <div className="text-3xl font-bold text-warm-gold mb-6">
              {service.price}
            </div>

            <button className="bg-warm-gold text-white px-8 py-3 rounded-md w-full md:w-auto mb-8 hover:opacity-90 transition-opacity font-semibold">
              Đặt Lịch Ngay
            </button>

            {/* FAQ/Notes Section */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold mb-4">Chi Tiết Dịch Vụ</h2>
              <div className="space-y-4">
                <AccordionItem title="Bao gồm những gì?">
                  <p>{service.description.includes}</p>
                </AccordionItem>
                <AccordionItem title="Thời gian thực hiện">
                  <p>{service.description.duration}</p>
                </AccordionItem>
                <AccordionItem title="Yêu cầu đối với thú cưng">
                  <p>{service.description.requirements}</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ServiceDetail;