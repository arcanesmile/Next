"use client";
import React from 'react'
import styles from '../styles/RecordSection.module.scss'

const RecordSection: React.FC = () => {
  return (
    <section className={styles.recordSection}>
      <div className={styles.content}>
        <h2>Transforming Ideas into Digital Reality</h2>
        <p>
          Learn from our team of industry experts and bring your ideas to life.
          We help you deliver impactful solutions that scale.
        </p>
        <div className={styles.stats}>
          <div>
            <h3>150+</h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3>2000+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h3>99%</h3>
            <p>Positive Feedback</p>
          </div>
        </div>
        <div className={styles.signature}>
          <p className={styles.name}>Bem Benjamin — CEO</p>
        </div>
      </div>
    </section>
  )
}

export default RecordSection