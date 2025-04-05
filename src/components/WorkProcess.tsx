"use client";
import React from 'react'
import styles from '../styles/WorkProcess.module.scss'

interface ProcessStep {
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    title: 'Consultation',
    description: 'We start by discussing your goals and challenges.'
  },
  {
    title: 'Strategy',
    description: 'We craft a personalized plan to meet your objectives.'
  },
  {
    title: 'Implementation',
    description: 'Our experts bring your project to life with best practices.'
  },
  {
    title: 'Results & Feedback',
    description: 'We review outcomes and optimize for continuous improvement.'
  }
]

const WorkProcess: React.FC = () => {
  return (
    <section className={styles.workProcess}>
      <h2>Our Proven Work Process</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <div className={styles.stepNumber}>{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkProcess