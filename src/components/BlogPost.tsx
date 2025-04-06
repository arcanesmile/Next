'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/data/posts';
import styles from '@/styles/blogPost.module.scss';

type BlogProps = {
  posts: Post[];
  searchQuery?: string;
  category?: string;
};

const BlogPost = ({ posts, searchQuery = '', category = '' }: BlogProps) => {
  const filteredPosts = posts.filter((post) => {
    const title = post.title?.toLowerCase() || '';
    const content = post.content?.toLowerCase() || '';
    const search = searchQuery.toLowerCase();

    const matchesSearch = title.includes(search) || content.includes(search);
    const matchesCategory = category
      ? post.category?.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles['blog-page']}>
      <ul className={styles['blog-post-list']}>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className={styles['blog-post-link']}>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className={styles['blog-post-image']}
              />
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;