import NavBar from "@/components/NavBar";
import styles from '@/styles/lotussprings.module.css';
import Footer from "@/components/Footer";
import Image from "next/image";

export default function LotusSprings() {
    return (
        <>
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.header}>Lotus Springs Wellness</h1>
            <div className={styles.writing}>
                <h2>Website Design Project</h2>
                <br/>
                <h2>Programs Used: SquareSpace</h2>
                <br/>
                <p>Lotus Springs Wellness is a holistic healing website where clients can book personalized Bio-Energy Healing sessions with the owner. Focused on restoring balance and promoting well-being, the practice uses energy clearing techniques to release blockages, reduce stress, and enhance vitality. Through an intuitive and client-centered approach, Lotus Springs Wellness provides a space for deep healing and renewal. Book a session today and start your journey toward greater harmony and inner peace.</p>
            </div>
        </div>
        </>
    )
    
}