import styles from './newsPage.module.scss';

interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
}

async function fetchNews(): Promise<Article[]> {
  const apiKey = process.env.NEWS_API_KEY!;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Failed to fetch news');
  const { articles } = await res.json();
  return articles;
}

export default async function NewsPage() {
  let articles: Article[];

  try {
    articles = await fetchNews();
  } catch {
    return <p className={styles.error}>Error loading news.</p>;
  }

  return (
    <div className={styles.newsContent}>
      <h1>Latest News</h1>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className={styles.articles}>
          {articles.map((a, i) => (
            <article key={i} className={styles.article}>
              {a.urlToImage && (
                <img
                  src={a.urlToImage}
                  alt={a.title}
                  className={styles.articleImage}
                  loading="lazy"
                />
              )}
              <h2 className={styles.articleTitle}>
                <a href={a.url} target="_blank" rel="noopener noreferrer">
                  {a.title}
                </a>
              </h2>
              <p className={styles.articleMeta}>
                {a.source.name} •{' '}
                {new Date(a.publishedAt).toLocaleDateString()}
              </p>
              <p className={styles.articleDescription}>
                {a.description ?? 'No description.'}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic';