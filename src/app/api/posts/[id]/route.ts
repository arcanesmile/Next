import { NextResponse } from 'next/server';
import { posts, Post } from '@/data/posts';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}