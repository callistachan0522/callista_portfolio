"use client";

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
    <br/>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Me!</h2>
        <a className={styles.linkedin} href='https://linkedin.com/in/callista-chan-692370265'>LinkedIn</a>
        <br/>
        <a className={styles.email} href='mailto: callyjchan@gmail.com'>Email</a>
      </div>
    </footer>
    </>
  );
};

export default Footer;