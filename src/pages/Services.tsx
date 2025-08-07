import React from 'react';
import { ArrowRight, FileText, Shield, Lock, LineChart, Scale, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features }: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="premium-card group p-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <Icon className="h-12 w-12 text-green-600 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start group/item">
            <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0 transform group-hover/item:translate-x-1 transition-transform" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group/link"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Legal Documentation & Contracting",
      description: "Comprehensive legal documentation services tailored to your technology and business needs.",
      features: [
        "IT & Tech Procurement Contracts",
        "Privacy & Compliance Documentation",
        "Corporate/Commercial Agreements",
        "Contract Template Libraries"
      ]
    },
    {
      icon: Shield,
      title: "Data Privacy & Security Audits",
      description: "Thorough assessment of your privacy practices and compliance requirements.",
      features: [
        "GDPR/CCPA Compliance Audits",
        "Privacy Impact Assessments",
        "Data Protection Reviews",
        "Security Control Evaluations"
      ]
    },
    {
      icon: Lock,
      title: "GRC Consulting",
      description: "Strategic guidance in governance, risk management, and compliance.",
      features: [
        "IT & Cyber Risk Governance",
        "Vendor Compliance Programs",
        "Business Continuity Planning",
        "ESG Strategy Development"
      ]
    },
    {
      icon: LineChart,
      title: "Business Strategy & IT Risk Advisory",
      description: "Strategic consulting for optimizing IT operations and risk management.",
      features: [
        "IT Sourcing Strategies",
        "M&A Risk Assessments",
        "Post-acquisition Integration",
        "Operational Benchmarking"
      ]
    },
    {
      icon: Scale,
      title: "Negotiation Strategy & Execution",
      description: "Expert negotiation support for high-value contracts and agreements.",
      features: [
        "Contract Negotiation",
        "Risk-sharing Strategies",
        "Stakeholder Workshops",
        "Value Optimization"
      ]
    },
    {
      icon: BookOpen,
      title: "IT Legal Advisory for Indian Jurisdiction",
      description: "Specialized legal advisory services for Indian IT regulations and compliance.",
      features: [
        "Indian IT Act Compliance",
        "Digital Payment Regulations",
        "Data Localization Requirements",
        "Sector-specific Compliance"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-gradient-to-r from-green-900 to-green-700 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-700/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto animate-slide-up">
              Comprehensive solutions for privacy, compliance, and strategic procurement tailored to your organization's unique needs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Ready to Get Started?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a free consultation and discover how we can help your organization.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary text-lg group"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;