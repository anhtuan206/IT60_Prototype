import React from 'react';
import { PawPrintIcon, HeartIcon, CoffeeIcon, HeadphonesIcon, UtensilsIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <PawPrintIcon className="h-8 w-8 text-amber-600" />,
    title: 'Private Suites',
    description: "Spacious, climate-controlled accommodations for your pet's comfort."
  }, {
    icon: <HeartIcon className="h-8 w-8 text-amber-600" />,
    title: 'Health Monitoring',
    description: 'Regular health checks and medication administration if needed.'
  }, {
    icon: <div className="h-8 w-8 text-amber-600" />,
    title: 'Grooming Services',
    description: 'Professional grooming to keep your pet looking their best.'
  }, {
    icon: <CoffeeIcon className="h-8 w-8 text-amber-600" />,
    title: 'Playtime Sessions',
    description: 'Supervised play sessions with other friendly pets.'
  }, {
    icon: <HeadphonesIcon className="h-8 w-8 text-amber-600" />,
    title: 'Webcam Access',
    description: 'Watch your pet anytime via our secure webcam system.'
  }, {
    icon: <UtensilsIcon className="h-8 w-8 text-amber-600" />,
    title: 'Custom Diet Plans',
    description: "We follow your pet's dietary requirements and feeding schedule."
  }];
  return <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of premium services to ensure your pet has a
            comfortable and enjoyable stay with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}