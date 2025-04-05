import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from '@/styles/blogPostPage.module.scss';

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const url = `http://localhost:3000/api/posts/${params.id}`;
  console.log(`Fetching post for ID: ${params.id} from ${url}`);

  const res = await fetch(url, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    return (
      <main className={styles['post-container']}>
        <h1>Post Not Found (ID: {params.id})</h1>
        <p>API returned: {res.status} - {text.slice(0, 100)}...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    );
  }

  const post = await res.json();

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

export const dynamic = 'force-dynamic';