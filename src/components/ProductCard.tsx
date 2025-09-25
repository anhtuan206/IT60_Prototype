import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <Link to={`/products/${id}`}>
        <img 
          src={image || `https://placehold.co/400x400?text=Product+${id}`}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/products/${id}`} className="flex-grow">
          <h3 className="font-medium text-neutral-text mb-1 hover:text-warm-brown transition-colors">{title}</h3>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-neutral-text">{price}</p>
          <button className="bg-warm-gold text-white px-3 py-1 rounded-md text-sm flex items-center hover:opacity-90 transition-opacity">
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span>Thêm</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;