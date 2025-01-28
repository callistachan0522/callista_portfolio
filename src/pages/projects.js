import Link from 'next/link';
import styles from "@/styles/projects.module.css"

export default function Projects() {
    return (
    <main>
          <div className={styles.Header}>
          <h1>Projects Page</h1>
          <p>Some Projects</p>
          <Link href="/">Home</Link>
        </div>
    </main>
      );
}