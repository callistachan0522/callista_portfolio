import NavBar from "@/components/NavBar"
import styles from '@/styles/artflow.module.css'
import Footer from "@/components/Footer"

export default function Artflow() {
    return (
        <>
        <div className={styles.container}>
        <NavBar />
        <h1 className={styles.header}>ArtFlow</h1>
        <h1 className={styles.progress}>COMING SOON</h1>
        </div>
        </>
    )
}