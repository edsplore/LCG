// src/pages/ThoughtLeadership.tsx
import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/thoughtLeadership';

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
        to={`/thought-leadership/${post.slug}`}
        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
      >
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
);

const ThoughtLeadership = () => {
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
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Follow on LinkedIn instead of Newsletter */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow us on LinkedIn</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest insights, articles, and compliance updates from
              LexComp Global.
            </p>
            <a
              href="https://www.linkedin.com/company/lexcompglobal-com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
            >
              Follow
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadership;
