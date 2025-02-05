import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/graphic1.module.css'

export default function Design1() {
    return (
    <>
     <h1 className={styles.title}>Eternal Sunshine Poster</h1>
        <div className={styles.firstImage}>
            <Image src='/images/image2.png' alt="picture" width={400} height={470} />
        </div>
        <div className={styles.writing}>
            <h2>Illustration Project</h2>
            <br/>
            <p>Programs Used: Photoshop, Illustrator</p>
            <br/>
            <p>This poster draws inspiration from Ariana Grande's Eternal Sunshine album with its central theme focusing on the concept of "eternal". The design is gives the poster a sci-fi feel. The doodles in the design are used to make it feel more personal and give it a more youthful vibe.</p>
        </div>
        <div className={styles.moreImages}>
            <Image src='/images/image7.png' alt="another photo" width={1100} height={600}/>
            <Image src='/images/imagee.png' alt="another photo" width={1100} height={600}/>
        </div>
    </>
    )

}