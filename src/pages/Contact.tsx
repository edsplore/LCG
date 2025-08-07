import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-700/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto animate-slide-up">
              Get in touch with our team of experts to discuss your organization's needs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Get in Touch</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start group hover:shadow-xl transition-shadow cursor-pointer">
                <Mail className="h-6 w-6 text-green-600 mt-1 transform group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:business@lexcompglobal.com" 
                    className="text-blue-600 hover:text-green-600 transition-colors underline cursor-pointer select-text"
                    onClick={(e) => e.stopPropagation()}
                  >
                    business@lexcompglobal.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1 select-text">Click to email or select to copy</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start group hover:shadow-xl transition-shadow cursor-pointer">
                <Phone className="h-6 w-6 text-green-600 mt-1 transform group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <a 
                    href="tel:+16503462173" 
                    className="text-blue-600 hover:text-green-600 transition-colors underline cursor-pointer select-text"
                    onClick={(e) => e.stopPropagation()}
                  >
                    +1 (650) 346-2173
                  </a>
                  <p className="text-sm text-gray-500 mt-1 select-text">Click to call or select to copy</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start group hover:shadow-xl transition-shadow">
                <MapPin className="h-6 w-6 text-green-600 mt-1 transform group-hover:scale-110 transition-transform" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600 select-text">
                    Palo Alto<br />
                    California, 94303<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Send Us a Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;