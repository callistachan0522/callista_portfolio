import styles from '@/styles/graphic2.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Design2() {
return (
    <>
    <NavBar />
    <h1 className={styles.title}>SunSip Can Design</h1>
    <div className={styles.firstImage}>
        <Image src='/images/image3.png' alt="picture" width={490} height={570} />
    </div>
    <div className={styles.writing}>
        <h2>Product Design Project</h2>
        <br/>
        <p>Programs Used: Photoshop, Illustrator</p>
        <br/>
        <p>
        Sunsip is your perfect companion for staying refreshed, no matter where the day takes you. This light and flavorful iced tea comes in three deliciously fruity varieties lemon, peach, and cherry—each carefully crafted to strike the perfect balance between bold flavor and crisp refreshment. Whether you're cooling off after a long walk in the sun, taking a break from work, or simply looking for a tasty way to hydrate, Sunsip is there to brighten your moment.
        <br />
        <br/>
        The packaging is simple yet stylish, featuring soft pastel colors and delicate fruit illustrations that reflect the fresh and natural flavors inside. It’s designed for people who appreciate a drink that’s both refreshing and effortlessly cool. Whether you’re lounging at the beach, enjoying a picnic in the park, or unwinding on your porch, Sunsip delivers a light, flavorful escape in every sip. Grab a bottle, take a breath, and enjoy the little moments with Sunsip—your perfect refreshment for any time of day.</p>
    </div>
    <div className={styles.moreImages}>
        <Image src='/images/image4.png' alt="another photo" width={350} height={490}/>
        <Image src='/images/image5.png' alt="another photo" width={350} height={490}/>
        <Image src='/images/image6.png' alt="another photo" width={350} height={490}/>
    </div>
    <div className={styles.anotherImage}>
        <Image src='/images/image11.png' alt="another photo" width={1300} height={700}/>
    </div>
    <Footer />
</>
)

}