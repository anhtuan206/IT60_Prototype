import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  price: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, price, image }) => {
  return (
    <Link to={`/services/${id}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image || `https://placehold.co/400x300?text=Service+${id}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-neutral-text mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    </Link>
  );
};
export default ServiceCard;