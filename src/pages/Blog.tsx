import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  created_at: string;
  cover_image: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      setLoading(false);
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Latest Articles</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-dark-50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">
                  {format(new Date(post.created_at), 'MMMM d, yyyy')}
                </p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}