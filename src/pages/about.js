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
        <p className={styles.aboutParagraph}>
My journey into design began in high school when I enrolled in my first graphic design class. From the moment I created my first project, I was hooked—I knew design was something I wanted to pursue professionally. That single course ignited my passion for creativity, innovation, and visual storytelling, while also teaching me the power of effective problem-solving and thoughtful design.
<br/>
<br/>
Since then, my enthusiasm has grown into a deeper appreciation for UX/UI and Graphic Design. Today, I'm driven by the opportunity to craft experiences that are not only visually appealing but also intuitive, accessible, and user-centered. I’m passionate about understanding users’ needs and behaviors, translating complex problems into seamless solutions, and ultimately creating designs that resonate with people and enhance their lives.
<br/>
<br/>
What excites me most is the entire creative journey—transforming initial concepts and rough sketches into polished, impactful designs that truly connect with users. My goal as a designer is always to blend beauty with functionality, ensuring every interaction is meaningful, intuitive, and memorable. </p>
        <Footer />
      </div>
    );
  }