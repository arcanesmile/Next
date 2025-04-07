'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from '@/styles/newsLayout.module.scss';

export default function NewsLayoutContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get('category') || 'general';
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const url = searchQuery ? `/news?q=${encodeURIComponent(searchQuery)}` : '/news';
    router.push(url);
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>News Arena</h1>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </header>
      <div>
         <nav className={styles.nav}>
          <Link
            href="/news"
            className={currentCategory === 'general' ? styles.active : ''}
          >
            Top Headlines
          </Link>
          <Link
            href="/news?category=technology"
            className={currentCategory === 'technology' ? styles.active : ''}
          >
            Technology
          </Link>
          <Link
            href="/news?category=business"
            className={currentCategory === 'business' ? styles.active : ''}
          >
            Business
          </Link>
          <Link href="/blog">Back to Blog</Link>
        </nav>
      </div>
    </div>
  );
}