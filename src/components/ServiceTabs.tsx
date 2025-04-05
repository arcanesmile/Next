"use client";
import React from 'react'
import styles from '../styles/ServiceTabs.module.scss'

const ServiceTabs: React.FC = () => {
  return (
    <section className={styles.serviceTabs}>
      <ul>
        <li>Website Development</li>
        <li>✳️</li>
        <li>UX/UI Design</li>
        <li>✳️</li>
        <li>Graphics Design</li>
      </ul>
    </section>
  )
}

export default ServiceTabs