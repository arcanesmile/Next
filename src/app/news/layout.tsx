import NewsLayoutContent from '@/components/NewsLayoutContent';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function NewsLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-up');
  }

  return (
    <div style={{ backgroundColor: '#e0e4eb' }}>
      <NewsLayoutContent />
      <main>{children}</main>
    </div>
  );
}