import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/mechanicalobject.module.css'
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

export default function MechanicalObject() {
    return (
        <>
        <NavBar/>
        <h1 className={styles.title}>Stereo Cassette Deck</h1>
        <div className={styles.firstImage}>
            <Image src='/images/object.png' alt="picture" width={990} height={570} />
        </div>
        <div className={styles.writing}>
            <h2>Technical Illustration Projet</h2>
            <br/>
            <p>Programs Used: Illustrator</p>
            <br/>
            <p>This vector illustration was crafted in Adobe Illustrator, showcasing a retro piece of audio technology with a sleek, minimalist aesthetic. The design captures intricate details like the cassette tape, playback controls, peak level meters, and various dials, all rendered with smooth gradients and subtle shading to enhance realism. The soft reflection beneath the deck adds depth, making it feel like a tangible object.</p>
        </div>
        <Footer />
        </>
    )
}