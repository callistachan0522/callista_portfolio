import NavBar from "@/components/NavBar"
import styles from '@/styles/flickcafe.module.css'
import Footer from "@/components/Footer";
import Image from "next/image";

export default function FlickCafe() {
    return (
        <>
        <NavBar />
        <h1 className={styles.header}>Flick Cafe</h1>
        <Image className={styles.home} src='/images/Home.png' alt="picture" width={490} height={770} />
        <div className={styles.writing}>
        <h2>UX/UI Design Project</h2>
            <br/>
            <p>Programs Used: Figma, Javascript</p>
            <br/>
        <p>Welcome to Flick Cafe, where the timeless glamour of 1920s art deco meets a modern juxtaposition of cinema and coffee. The name “Flick” is a slang term for film, commonly used in the 1920s, evoking an era where ech reel unfolded stories that captivated hearts and ignited imaginations. Stepping into Flick Cafe is like entering a cinematic time capsule, blending seamlessly with the contemporary buzz of caffeine-fueled conversations and the soft glow of digital screens. Nestled in the heart of Burnaby, Flick Cafe is not just a coffee shop—it's a unique, nostalgic yet modern atmosphere, making it an ideal hangout spot for teens, millennials, and movie lovers of all ages. </p>
        </div>
        <Footer />
        </>
    )
}