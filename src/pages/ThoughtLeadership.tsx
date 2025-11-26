import React, { useState } from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  imageUrl: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{post.date}</span>
        <User className="h-4 w-4 ml-4 mr-2" />
        <span>{post.author}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"
          >
            <Tag className="h-3 w-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
      <Link
        to="#"
        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
      >
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
);

const ThoughtLeadership = () => {
  // TODO: move this array into src/data/thoughtLeadership.ts later
  const blogPosts: BlogPost[] = [
    {
      title: 'The Future of Privacy in the Age of AI',
      excerpt:
        'Exploring the intersection of artificial intelligence and data privacy regulations, and what it means for businesses.',
      date: 'March 15, 2024',
      author: 'Nidhi Sodhani',
      tags: ['AI', 'Privacy', 'GDPR'],
      imageUrl:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    },
    {
      title: 'Navigating Global Data Protection Laws',
      excerpt:
        'A comprehensive guide to understanding and implementing international data protection requirements.',
      date: 'March 10, 2024',
      author: 'Legal Team',
      tags: ['Compliance', 'Global', 'Data Protection'],
      imageUrl:
        'https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&q=80',
    },
    {
      title: 'Strategic IT Procurement in 2024',
      excerpt:
        'Best practices for optimizing your IT procurement process in an evolving technological landscape.',
      date: 'March 5, 2024',
      author: 'Procurement Team',
      tags: ['Procurement', 'Strategy', 'IT'],
      imageUrl:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    },
    {
      title: 'ESG Compliance: A Modern Necessity',
      excerpt:
        "Understanding the importance of Environmental, Social, and Governance compliance in today's business world.",
      date: 'March 1, 2024',
      author: 'ESG Team',
      tags: ['ESG', 'Sustainability', 'Compliance'],
      imageUrl:
        'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
    },
    {
      title: 'Cybersecurity Risk Management',
      excerpt:
        'Essential strategies for managing and mitigating cybersecurity risks in your organization.',
      date: 'February 25, 2024',
      author: 'Security Team',
      tags: ['Cybersecurity', 'Risk', 'Management'],
      imageUrl:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    },
    {
      title: 'Digital Transformation Compliance',
      excerpt:
        'Ensuring compliance while undergoing digital transformation initiatives.',
      date: 'February 20, 2024',
      author: 'Digital Team',
      tags: ['Digital', 'Transformation', 'Compliance'],
      imageUrl:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    },
  ];

  // Newsletter state + handler
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend-only behavior: log + show success.
    // Backend can be wired later if needed.
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing! You have been added to our newsletter list.');

    setEmail('');
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Thought Leadership</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Insights and expertise from our team of legal and compliance professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadership;
