'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { posts as allPosts } from '@/data/posts'; 
import styles from './blogPage.module.scss'

const BlogPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || '';

  return (
    <main className={styles.main}>
      <BlogPost posts={allPosts} searchQuery={searchQuery} category={selectedCategory} />
    </main>
  );
};

export default BlogPage;