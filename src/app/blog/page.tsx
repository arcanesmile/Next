'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';
import BlogPost from '@/components/BlogPost';
import styles from './blogPage.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BlogPage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || '';
  const [shouldRedirect, setShouldRedirect] = useState(false);


  
  useEffect(() => {
    if (isLoaded && !isSignedIn && window.Clerk) {
      window.Clerk.session
        ?.getToken()
        .then()
        .catch((err) => console.error('Session sync failed:', err));
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [isLoaded, isSignedIn]);

  const { data: posts, error, isLoading } = useSWR(
    isSignedIn ? '/api/posts' : null,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  if (!isLoaded) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (shouldRedirect && !isSignedIn) {
    console.log('Redirecting to sign-in: User not authenticated');
    return <RedirectToSignIn redirectUrl="/blog" />;
  }

  if (isLoading) {
    return <div className={styles.loading}>Loading posts...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading posts: {error.message}</div>;
  }

  if (!posts || posts.length === 0) {
    return <div className={styles.error}>No posts available</div>;
  }

  return (
    <main className={styles.main}>
      <h1>Blog Posts</h1>
      <div className={styles.postsGrid}>
        <BlogPost
          posts={posts || []}
          searchQuery={searchQuery}
          category={selectedCategory}
        />
      </div>
    </main>
  );
};

export default BlogPage;