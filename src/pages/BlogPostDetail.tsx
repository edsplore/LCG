// src/pages/BlogPostDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/thoughtLeadership';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link
          to="/thought-leadership"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Thought Leadership
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
        <p className="text-gray-600">
          The article you are looking for does not exist or has been moved.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      <div className="bg-gray-50 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/thought-leadership"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Thought Leadership
          </Link>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <span className="inline-flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </span>
              <span className="inline-flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-700"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
          />

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {post.content.split('\n\n').map((para, idx) => (
              <p key={idx} className="mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
