'use client';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import styles from '@/styles/blogPostPage.module.scss';
import { Post } from '@/data/posts';

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
});

export default function ClientPostContent({
  initialData,
  id,
}: {
  initialData: Post | null;
  id: string;
}) {
  const { data: post, error, isLoading } = useSWR<Post>(
    `/api/posts/${id}`,
    fetcher,
    {
      fallbackData: initialData,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  if (isLoading && !post) {
    return (
      <main className={styles['post-container']}>
        <p>Loading...</p>
      </main>
    );
  }

  if (error || !post || post.error) {
    return (
      <main className={styles['post-container']}>
        <h1>Post Not Found (ID: {id})</h1>
        <p>{error?.message || 'Post not found'}</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className={styles['post-container']}>
      <h1>{post.title}</h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className={styles['post-image']}
        />
      )}
      <p>{post.content}</p>
      <br />
      <Link href="/blog">Back to Blog</Link>
    </main>
  );
}