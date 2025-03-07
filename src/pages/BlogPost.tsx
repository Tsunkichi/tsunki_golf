import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
  cover_image: string;
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        return;
      }

      setPost(data);
      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="max-w-3xl mx-auto">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="max-w-3xl mx-auto">
          <p>Post not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 px-4">
      <article className="max-w-3xl mx-auto">
        {post.cover_image && (
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">
          {format(new Date(post.created_at), 'MMMM d, yyyy')}
        </p>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}