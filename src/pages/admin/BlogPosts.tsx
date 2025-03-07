import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Plus, Search, Filter, MoreVertical, Edit, Trash, Eye } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  author: string;
  category: string;
  status: string;
  excerpt: string;
  cover_image: string;
}

export function AdminBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Mastering Your Golf Swing: A Beginner's Guide",
      slug: "mastering-golf-swing-beginners-guide",
      created_at: "2024-03-15T10:00:00Z",
      author: "John Smith",
      category: "Tips & Tricks",
      status: "Published",
      excerpt: "Learn the fundamentals of a perfect golf swing with our comprehensive guide for beginners.",
      cover_image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Top 10 Golf Clubs for 2024",
      slug: "top-10-golf-clubs-2024",
      created_at: "2024-03-14T15:30:00Z",
      author: "Sarah Johnson",
      category: "Equipment Reviews",
      status: "Published",
      excerpt: "Discover the best golf clubs of 2024 that will help improve your game.",
      cover_image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Improving Your Putting Technique",
      slug: "improving-putting-technique",
      created_at: "2024-03-13T09:15:00Z",
      author: "Mike Wilson",
      category: "Training",
      status: "Draft",
      excerpt: "Master the art of putting with these professional tips and techniques.",
      cover_image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "2024 Masters Tournament Preview",
      slug: "2024-masters-tournament-preview",
      created_at: "2024-03-12T14:20:00Z",
      author: "David Thompson",
      category: "Tournament News",
      status: "Scheduled",
      excerpt: "Get ready for the 2024 Masters Tournament with our comprehensive preview.",
      cover_image: "https://plus.unsplash.com/premium_photo-1680374186281-bc2dd747d19c?q=80&w=2070&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Golf Fitness: Exercises for Better Performance",
      slug: "golf-fitness-exercises",
      created_at: "2024-03-11T11:45:00Z",
      author: "Emily Brown",
      category: "Training",
      status: "Published",
      excerpt: "Stay in shape and improve your golf game with these targeted exercises.",
      cover_image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80"
    }
  ]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return;
    }

    setPosts(data || []);
  }

  async function deletePost(id: number) {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
      return;
    }

    fetchPosts();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Blog Posts</h1>
            <Link
              to="/admin/posts/new"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              New Post
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 text-gray-400" />
              Filters
            </button>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option>All Categories</option>
              <option>Tips & Tricks</option>
              <option>Equipment Reviews</option>
              <option>Tournament News</option>
            </select>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg overflow-hidden">
                        <img src={post.cover_image} alt={post.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-md">{post.excerpt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{post.author}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{post.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${post.status === 'Published' ? 'bg-green-100 text-green-800' :
                        post.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                          'bg-blue-100 text-blue-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center gap-2 justify-end">
                      <Link to={`/blog/${post.slug}`} className="text-gray-400 hover:text-blue-600">
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link to={`/admin/posts/${post.id}`} className="text-gray-400 hover:text-purple-600">
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-between sm:hidden">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">20</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      1
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      2
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}