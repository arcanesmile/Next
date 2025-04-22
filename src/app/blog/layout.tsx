import BlogNav from '@/components/BlogNav';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div style={{ backgroundColor: '#e0e4eb' }}>
      <BlogNav />
      <main>{children}</main>
    </div>
  );
}