import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/graphic1.module.css'
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

export default function Design1() {
    return (
    <>
    <div className={styles.container}>
    <NavBar />
     <h1 className={styles.title}>Petal Purrfections</h1>
        <div className={styles.firstImage}>
            <Image src='/images/image10.png' alt="picture" width={490} height={570} />
        </div>
        <div className={styles.writing}>
            <h2>Logo and Poster Design Project</h2>
            <br/>
            <p>Programs Used: Illustrator</p>
            <br/>
            <p>Petal Purrfections is a flower shop where customers can shop for fresh blooms while enjoying the playful company of cats. The logo captures the shop's lively and whimsical spirit, featuring a cat playfully reaching for a flower—a perfect blend of fun and floral charm. The poster designs mirror this playful atmosphere, creatively showcasing the shop’s unique concept while effectively promoting its offerings.</p>
        </div>
        <div className={styles.moreImages}>
            <Image src='/images/image8.png' alt="another photo" width={1400} height={699}/>
            <Image src='/images/image9.png' alt="another photo" width={1400} height={699}/>
        </div>
        </div>
        <Footer />
    </>
    )

}