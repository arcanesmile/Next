"use client";
import React from 'react'
import styles from '../styles/Services.module.scss'

interface Service {
  title: string
  description: string
  icon: string
}

const servicesData: Service[] = [
  {
    title: 'Website Development',
    description: 'High-quality websites to boost your online presence.',
    icon: '/images/icon-webdev.svg'
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android.',
    icon: '/images/icon-mobile.svg'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design to create engaging experiences.',
    icon: '/images/icon-uiux.svg'
  }
]

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
      <h2>Services We Provide to Elevate Your Business</h2>
      <div className={styles.cardsContainer}>
        {servicesData.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconWrapper}>
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services