import BlogNav from '@/components/BlogNav';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlogNav />
      <main>{children}</main>
    </div>
  );
}