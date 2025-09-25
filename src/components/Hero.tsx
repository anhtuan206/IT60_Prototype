import React from 'react';
export function Hero() {
  return <section className="relative bg-amber-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Pet's Home <br />
              Away From Home
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Luxury accommodations and professional care for your furry family
              members. We treat your pets like our own.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors font-medium">
                Book a Stay
              </button>
              <button className="bg-white border border-amber-600 text-amber-600 px-6 py-3 rounded-md hover:bg-amber-50 transition-colors font-medium">
                Take a Tour
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Happy dog at pet hotel" className="rounded-lg shadow-lg w-full object-cover" style={{
              height: '400px'
            }} />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-green-500 h-3 w-3 rounded-full mr-2"></div>
                  <span className="font-medium text-sm">24/7 Care</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-blue-500 h-3 w-3 rounded-full mr-2"></div>
                  <span className="font-medium text-sm">Vet on Premises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}