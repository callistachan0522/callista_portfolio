import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import styles from '@/styles/about.module.css';

export default function About() {
    return (
      <div>
        <NavBar />
        <h1 className={styles.about}>About Me!</h1>
        <Image className={styles.me} src='/images/me.jpg' alt="picture of me" width={550} height={700} />
      </div>
    );
  }