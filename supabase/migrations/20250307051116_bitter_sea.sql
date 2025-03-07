/*
  # Blog System Schema

  1. New Tables
    - `blog_posts`
      - `id` (bigint, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `cover_image` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  cover_image text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage posts
CREATE POLICY "Allow authenticated users to manage posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);