"use client";
import React from 'react';
import styles from '@/styles/Services.module.scss';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'; // Example icons from Font Awesome

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const servicesData: Service[] = [
  {
    title: 'Website Development',
    description: 'High-quality websites to boost your online presence.',
    icon: <FaCode className={styles.icon} />
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android.',
    icon: <FaMobileAlt className={styles.icon} />
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design to create engaging experiences.',
    icon: <FaPaintBrush className={styles.icon} />
  }
];

const Services: React.FC = () => {
  return (
    <section className={styles.services} id="services">
      <h2>Services We Provide to Elevate Your Business</h2>
      <div className={styles.cardsContainer}>
        {servicesData.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;