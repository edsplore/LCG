import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, FileCheck, Users, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/src/assets/lcg-banner.jpg')`
        }}
      >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in drop-shadow-2xl" style={{ textShadow: '2px 4px 8px rgba(0, 0, 0, 0.8)' }}>
              Driving Business Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto animate-slide-up drop-shadow-lg bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg" style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}>
              Welcome to LexComp Global – Your Partner in Compliance, Procurement, & Risk Management
            </p>
            <Link
              to="/contact"
              className="btn btn-primary text-lg group drop-shadow-lg"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Key Offerings */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Our Key Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your organization's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Legal Documentation & Contracting",
                description: "Expert guidance in IT contracts, privacy agreements, and commercial documentation."
              },
              {
                icon: FileCheck,
                title: "Data Privacy Audits",
                description: "Comprehensive assessment of your privacy practices and compliance requirements."
              },
              {
                icon: Lock,
                title: "GRC Consulting",
                description: "Strategic guidance in governance, risk management, and compliance."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="premium-card card p-8 group"
              >
                <service.icon className="h-12 w-12 text-green-600 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">What Our Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "LexComp Global's expertise in privacy compliance has been invaluable for our organization. Their team provided clear guidance and practical solutions.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp Inc."
              },
              {
                quote: "Their strategic procurement advice helped us optimize our vendor relationships and reduce risks significantly. Highly recommended!",
                author: "Michael Chen",
                role: "COO, Global Solutions Ltd."
              }
            ].map((testimonial, index) => (
              <div key={index} className="premium-card card p-8 group">
                <p className="text-gray-600 mb-8 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <Users className="h-12 w-12 text-green-600 transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;