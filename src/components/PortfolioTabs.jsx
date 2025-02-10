import React, { useState } from 'react';
import styles from './PortfolioTabs.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Design1 from '@/pages/graphic1';
import Design2 from '@/pages/graphic2';

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState('uiux');

  const tabs = [
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'frontend', label: 'Frontend Development' }
  ];

  const projects = {
    uiux: [
      { id: 1, title: 'Beep', image: '/images/main4.png', link: '/casestudy' },
      { id: 2, title: 'UI/UX Project 2', image: '/images/image2.png' }
    ],
    graphic: [
      { id: 1, title: 'Eternal Sunshine Poster', image: '/images/image2.png', link: '/graphic1' },
      { id: 2, title: 'SunSip Can Design', image: '/images/image3.png', link: '/graphic2' },
      { id: 3, title: 'Petal Purrfections', image: '/images/image10.png', link: '/graphic3'}
    ],
    frontend: [
      { id: 1, title: 'Frontend Project 1', image: '/images/image2.png' },
      { id: 2, title: 'Frontend Project 2', image: '/images/image2.png' }
    ]
  };

  return (
    <div className={styles.container}>
      {/* Tab Navigation */}
      <nav className={styles.tabNav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Project Grid */}
      <div className={styles.projectGrid}>
        {projects[activeTab].map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
            {project.link ? (
              <Link href={project.link}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400}
                  height={300}
                  className="project-image" 
                />
              </Link>
            ) : (
              <p>No link available</p>
            )}
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTabs;