'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import BlogPost from '@/components/BlogPost';
import styles from './blogPage.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BlogPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || '';

  const { data: posts, error, isLoading } = useSWR(
    '/api/posts',
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  if (isLoading) return <div className={styles.loading}>Loading posts...</div>;
  if (error) return <div className={styles.error}>Error loading posts: {error.message}</div>;

  return (
    <main className={styles.main}>
      <BlogPost 
        posts={posts || []} 
        searchQuery={searchQuery} 
        category={selectedCategory} 
      />
    </main>
  );
};

export default BlogPage;