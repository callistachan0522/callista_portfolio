import NavBar from "@/components/NavBar"
import styles from '@/styles/artflow.module.css'
import Footer from "@/components/Footer"

export default function Artflow() {
    return (
        <>
        <NavBar />
        <h1 className={styles.header}>ArtFlow</h1>
        <h1 className={styles.progress}>This Page is a Work in Progress!</h1>
        
        </>
    )
}