
import styles from './newsPage.module.scss';

interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: { name: string };
}

async function fetchNews(category: string = 'general', query: string = '') {
  const apiKey = process.env.NEWS_API_KEY;
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  if (query) {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
  }

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch news articles');
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { category?: string; q?: string };
}) {
  const category = searchParams.category || 'general';
  const query = searchParams.q || '';

  let articles: Article[] = [];
  let error: string | null = null;

  try {
    articles = await fetchNews(category, query);
  } catch (err) {
    error = err instanceof Error ? err.message : 'An error occurred while fetching news';
  }

  return (
    <div className={styles.newsContent}>
      <h1>
        Latest News {category !== 'general' ? `(${category})` : ''}{' '}
        {query ? `(Search: ${query})` : ''}
      </h1>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <div className={styles.articles}>
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} className={styles.article}>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className={styles.articleImage}
                  />
                )}
                <h2 className={styles.articleTitle}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h2>
                <p className={styles.articleMeta}>
                  {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <p className={styles.articleDescription}>
                  {article.description || 'No description available.'}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic';