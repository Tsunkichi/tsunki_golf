import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X, Image as ImageIcon } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  status: string;
  cover_image: string;
  meta_title: string;
  meta_description: string;
  tags: string;
}

export function AdminEditPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost>({
    id: 0,
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    author: '',
    category: 'Tips & Tricks',
    status: 'Draft',
    cover_image: '',
    meta_title: '',
    meta_description: '',
    tags: ''
  });

  useEffect(() => {
    if (id && id !== 'new') {
      // Simulate fetching post data
      const dummyPost = {
        id: 1,
        title: 'Mastering Your Golf Swing: A Beginner\'s Guide',
        slug: 'mastering-golf-swing-beginners-guide',
        content: 'Learn the fundamentals of a perfect golf swing with our comprehensive guide...',
        excerpt: 'Learn the fundamentals of a perfect golf swing with our comprehensive guide for beginners.',
        author: 'John Smith',
        category: 'Tips & Tricks',
        status: 'Published',
        cover_image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80',
        meta_title: 'Golf Swing Guide for Beginners | PrecisionGolf',
        meta_description: 'Master the perfect golf swing with our comprehensive beginner\'s guide. Learn proper technique, common mistakes to avoid, and pro tips.',
        tags: 'golf swing, beginners, technique, training'
      };
      setPost(dummyPost);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving post
    console.log('Saving post:', post);
    navigate('/admin/posts');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit}>
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link
                  to="/admin/posts"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {id === 'new' ? 'New Blog Post' : 'Edit Blog Post'}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPost(prev => ({ ...prev, status: 'Draft' }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  onClick={() => setPost(prev => ({ ...prev, status: 'Published' }))}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <input
                  type="text"
                  name="title"
                  value={post.title}
                  onChange={handleInputChange}
                  placeholder="Post title"
                  className="w-full text-3xl font-bold border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
                />
              </div>

              {/* Featured Image */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Featured Image</h2>
                {post.cover_image ? (
                  <div className="relative">
                    <img
                      src={post.cover_image}
                      alt="Featured"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setPost(prev => ({ ...prev, cover_image: '' }))}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <div className="text-gray-600 mb-2">Drop an image here</div>
                      <div className="text-sm text-gray-500 mb-4">or</div>
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Choose Image
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Editor */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center gap-4">
                    <button type="button" className="p-2 hover:bg-gray-100 rounded">
                      <strong className="text-lg">B</strong>
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-100 rounded">
                      <em className="text-lg">I</em>
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-100 rounded">
                      <u className="text-lg">U</u>
                    </button>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <button type="button" className="p-2 hover:bg-gray-100 rounded">
                      <ImageIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <textarea
                  name="content"
                  value={post.content}
                  onChange={handleInputChange}
                  placeholder="Write your post content here..."
                  className="w-full h-96 border-0 focus:outline-none focus:ring-0 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Settings */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Post Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={post.slug}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="post-url-slug"
                    />
                  </div>
                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                      Excerpt
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={post.excerpt}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Brief description for SEO and previews"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Categories & Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Categories & Tags</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={post.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option>Tips & Tricks</option>
                      <option>Equipment Reviews</option>
                      <option>Tournament News</option>
                      <option>Training</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                      Tags
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={post.tags}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Add tags separated by commas"
                    />
                  </div>
                </div>
              </div>

              {/* SEO */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">SEO</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      id="metaTitle"
                      name="meta_title"
                      value={post.meta_title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="SEO title"
                    />
                  </div>
                  <div>
                    <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      id="metaDescription"
                      name="meta_description"
                      value={post.meta_description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="SEO description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}