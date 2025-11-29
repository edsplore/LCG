// src/pages/Pricing.tsx
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { regions } from '../data/pricing';

const PricingCard = ({
  title,
  description,
  price,
  features,
  highlight = false,
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) => (
  <div
    className={`premium-card group p-8 relative overflow-hidden ${
      highlight ? 'ring-2 ring-blue-600 shadow-xl' : ''
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <p className="text-4xl font-bold text-gradient mb-6">{price}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start group/item">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0 transform group-hover/item:scale-110 transition-transform" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`block text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          highlight
            ? 'btn btn-primary'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
        }`}
      >
        Get Started
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <div
        className="relative py-24 bg-gradient-to-r from-green-900 to-green-700 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-700/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Transparent Pricing
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto animate-slide-up">
              Choose the perfect plan for your organization&apos;s needs with our flexible pricing
              options.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      {/* Pricing Sections */}
      {regions.map((region, index) => (
        <div key={region.name} className={`py-24 ${index === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-gradient">{region.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {region.plans.map((plan) => (
                <PricingCard key={plan.title} {...plan} />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Custom Solutions */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Need a Custom Solution?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us to discuss a tailored package that meets your specific requirements.
            </p>
            <Link to="/contact" className="btn btn-primary text-lg group">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
