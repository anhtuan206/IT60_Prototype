import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Sarah Johnson',
    pet: 'Max, Golden Retriever',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    petImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'PawsResort is amazing! Max always comes home happy and well-cared for. The staff treats him like family.'
  }, {
    name: 'Michael Thompson',
    pet: 'Luna, Siamese Cat',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    petImage: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'Luna is very particular, but she absolutely loves staying here. The cat suites are perfect and the staff understands her needs.'
  }, {
    name: 'Emily Rodriguez',
    pet: 'Cooper, French Bulldog',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    petImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    text: 'Cooper has separation anxiety, but the team at PawsResort knows exactly how to keep him calm and happy. I can travel worry-free!'
  }];
  return <section id="testimonials" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Happy Pets & Owners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients and their
            pets have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.pet}</p>
                </div>
                <img src={testimonial.petImage} alt={testimonial.pet} className="h-12 w-12 rounded-full object-cover ml-auto border-2 border-amber-300" />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}