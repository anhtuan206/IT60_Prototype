import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book a stay? Get in touch with us.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-amber-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send us a message
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="john@example.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="pet" className="block text-gray-700 mb-2">
                  Pet Details
                </label>
                <input type="text" id="pet" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Type, breed, age..." />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Visit Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      123 Pet Paradise Lane
                      <br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@pawsresort.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 7am - 7pm
                      <br />
                      Saturday: 8am - 5pm
                      <br />
                      Sunday: 9am - 4pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gray-200 h-48 rounded-md flex items-center justify-center">
                <p className="text-gray-600">Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}