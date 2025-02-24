import Link from 'next/link';
import styles from "@/styles/projects.module.css"
import PortfolioTabs from '../components/PortfolioTabs';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Projects() {
    return (
    <main>
        <Navbar />
          <div className={styles.Header}>
          <h1 className={styles.project}>My Work</h1>
        </div>
        <br />
        <br/>
        <br/>
        <PortfolioTabs />
        <Footer />
    </main>
      );
}