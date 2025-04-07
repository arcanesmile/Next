import NewsLayoutContent from '@/components/NewsLayoutContent';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#e0e4eb' }}>
      <NewsLayoutContent />
      <main>{children}</main>
    </div>
  );
}