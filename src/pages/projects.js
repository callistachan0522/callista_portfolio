import Link from 'next/link';
import styles from "@/styles/projects.module.css"
import PortfolioTabs from '../components/PortfolioTabs';

export default function Projects() {
    return (
    <main>
          <div className={styles.Header}>
          <h1>Projects Page</h1>
          <Link href="/">Home</Link>
        </div>
        <PortfolioTabs />
    </main>
      );
}