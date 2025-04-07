import BlogNav from '@/components/BlogNav';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#e0e4eb' }}>
      <BlogNav />
      <main>{children}</main>
    </div>
  );
}