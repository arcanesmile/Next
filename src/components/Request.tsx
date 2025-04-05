"use client";
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Request.module.scss';

const Request: React.FC = () => {
  return (
    <section className={styles.requestTab}>
      <ul>
        <li>Apply for services</li>
        <li>
          <Link href="/contact">
            <button className={styles.requestBtn}>{'>'}</button>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Request;