"use client"
import React from 'react'
import styles from '../styles/HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Where Creativity Meets Cutting-Edge Technology</h1>
        <p>Experience the best IT solutions for your business</p>
        <a href="#services" className={styles.ctaButton}>
          View Services
        </a>
      </div>
    </section>
  )
}

export default HeroSection