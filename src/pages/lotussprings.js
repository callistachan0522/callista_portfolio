import NavBar from "@/components/NavBar";
import styles from '@/styles/lotussprings.module.css';
import Footer from "@/components/Footer";

export default function LotusSprings() {
    return (
        <>
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.header}>Lotus Springs Wellness</h1>
            <h1 className={styles.progress}>This page is a work in progress!</h1>
        </div>
        </>
    )
    
}