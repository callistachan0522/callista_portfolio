import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import styles from '@/styles/about.module.css';
import Footer from '@/components/Footer';

export default function About() {
    return (
      <div>
        <NavBar />
        <h1 className={styles.about}>About Me!</h1>
        <Image className={styles.me} src='/images/me.jpg' alt="picture of me" width={550} height={700} />
        <h2 className={styles.aboutHeader}>Hey, I’m Callista!</h2>
        <p className={styles.aboutParagraph}>Ever since I took a graphic design class in high school, I knew design was something I wanted to pursue. That one course sparked my love for creativity, problem-solving, and making things that not only look good but also feel intuitive to use. Now, as a UX/UI and Graphic Designer, I’m all about crafting experiences that are both beautiful and functional. I love the process of bringing ideas to life and creating designs that make a real impact. </p>
        <Footer />
      </div>
    );
  }