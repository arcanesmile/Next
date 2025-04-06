import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/data/posts';
import ClientPostContent from './ClientPostContent'; // We'll create this
import { Suspense } from 'react';

// Server Component: Fetch initial data
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const url = `http://localhost:3000/api/posts/${params.id}`;
  const res = await fetch(url, { cache: 'no-store' });
  const initialData = res.ok ? await res.json() : null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPostContent initialData={initialData} id={params.id} />
    </Suspense>
  );
}

export const dynamic = 'force-dynamic'; // Ensure dynamic rendering