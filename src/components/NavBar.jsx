"use client";

import styles from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
    <br/>
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.home} href="/">Home</Link>
        <Link className={styles.work} href="/projects">My Work</Link>
        <Link className={styles.aboutLink} href="/about">About</Link>
      </div>
    </header>
    </>
  );
};

export default NavBar;
