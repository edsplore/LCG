import React from 'react';
import { ArrowRight, Shield, Users, Target, Award, BarChart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "50+", label: "Countries" },
    { number: "1000+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of professional ethics and transparency in all our dealings."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering superior results for our clients."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, fostering strong partnerships and shared success."
    },
    {
      icon: BarChart,
      title: "Innovation",
      description: "We leverage cutting-edge technology and innovative solutions to address complex challenges."
    }
  ];

  const process = [
    {
      title: "Discovery Call",
      description: "Initial consultation to understand your needs and objectives."
    },
    {
      title: "Proposal & Scope",
      description: "Detailed proposal outlining solutions and implementation strategy."
    },
    {
      title: "Assessment",
      description: "Thorough analysis of your current systems and processes."
    },
    {
      title: "Implementation",
      description: "Execution of agreed solutions with regular progress updates."
    },
    {
      title: "Review & Optimize",
      description: "Continuous monitoring and optimization of implemented solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <div 
        className="relative py-32 bg-gradient-to-r from-green-900 to-green-700 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 to-green-700/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              About LexComp Global
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto animate-slide-up">
              Your Partner in Global Privacy & Risk Governance
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between legal expertise and technological innovation,
              LexComp Global has grown to become a trusted partner for organizations worldwide. Our unique
              approach combines deep legal knowledge with technical understanding to deliver comprehensive
              solutions for modern business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Our Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="premium-card p-8 text-center group">
                <value.icon className="h-12 w-12 text-green-600 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Our Process</span>
          </h2>
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-green-600 to-green-300 transform -translate-x-1/2"></div>
            <div className="space-y-16">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/20 group-hover:shadow-green-600/30 transition-shadow">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 ml-auto'}`}>
                      <div className="premium-card p-6 group hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-green-100 mb-8">
              Let's discuss how we can help your organization achieve its goals.
            </p>
            <Link
              to="/contact"
              className="btn btn-secondary text-lg group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;