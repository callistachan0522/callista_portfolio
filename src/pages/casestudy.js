import Image from "next/image";
import styles from '@/styles/casestudy.module.css';
import Link from "next/link";
import NavBar from "@/components/NavBar";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";

export default function CaseStudy() {
    return (
        <>  
            <div className={styles.container}>
            <NavBar />
            <h1 className={styles.title}>Beep</h1>
        <div className={styles.firstImage}>
            <Image src='/images/cs1.png' alt="picture" width={490} height={570} />
        </div>
        <div className={styles.writing}>
            <h2 className={styles.main}>App Development | Case Study</h2>
            <br/>
            <p className={styles.role}>Role: Frontend Designer</p>
            <br/>
            <p className={styles.role}>Programs Used: React native, Expo Go, Figma</p>
            <br/>
            <Link className={styles.demo} href='https://www.youtube.com/shorts/GoaUL_IReU8'>App Demo</Link>
        </div>
        <div className={styles.section2}>
            <h2 className={styles.header}>What is Beep?</h2>
            <br/>
            <p className={styles.blurb}>Beep is an app dedicated to safety using AI and VPD's crime data API to determine the safest route to a destination with features such as a SOS button that makes a loud alarm sound when pressed and a "snapshot" feature where users can take a photo of their surroundings and save to a media history folder that will pinpoint the users location on a mini map and users can send an SMS to emergency contacts of their current location.</p>
        </div>

        <div className={styles.section3Img}>
            <Image className={styles.sectionImg} src='/images/cs2.png' alt="picture" width={490} height={570} />
        </div>
        <div className={styles.section3}>
            <h2 className={styles.header}>Problem</h2>
            <br/>
            <p className={styles.blurb}>Globally, 46% of women do not feel safe walking alone at night, leading many to avoid nighttime travel altogether due to concerns about personal safety. Factors such as poor lighting, isolated areas, and the risk of harassment or violence contribute to this widespread fear. Despite advancements in technology and urban safety initiatives, Canada currently lacks dedicated apps designed to provide real-time reassurance and support for safer navigation.</p>
        </div>
        <div className={styles.section4}>
        <h2 className={styles.header}>Target Audience</h2>
            <br/>
            <p className={styles.blurb}>Beep's target audience are Women, marginalized communities, and individuals who prioritize personal safety in their daily lives, particularly when navigating urban environments, commuting alone, or traveling through unfamiliar areas.</p>
            <br/>
            <Link href='https://docs.google.com/spreadsheets/d/1kJt4UG44dgGP3s849Wj166taCNonv4402Hu2OA-tiU0/edit?usp=sharing'>Usability Testing</Link>
            <Link href='https://docs.google.com/spreadsheets/d/18jNe4otYjzAbPkG72CNo7rVKZwcHYIQ4pjMklCmBFEU/edit?usp=sharing'>Competitive Analysis</Link>
        </div>
        <div className={styles.section5}>
            <h2 className={styles.header}>User Persona</h2>
            <br/>
            <Image className={styles.sectionImg} src='/images/userpersona.png' alt="picture" width={1100} height={570} />
        </div>
        <div className={styles.section6Img}>
            <Image className={styles.sectionImg} src='/images/cs3.png' alt="picture" width={490} height={570} />
        </div>
        <div className={styles.section6}>
            <h2 className={styles.header}>Solution</h2>
            <br/>
            <p className={styles.blurb}> Recognizing that safety is a fundamental right, Beep aims to bridge the gap between uncertainty and security by providing real-time insights, AI-powered route recommendations, and community-driven alerts. Its mission is clear: to make safety accessible, reliable, and proactive, ensuring that everyone can move through the world with greater peace of mind.</p>
        </div>
        <div className={styles.section7Img}>
            <Image className={styles.sectionImg} src='/images/Ultramarine.png' alt="picture" width={490} height={870} />
        </div>
        <div className={styles.section7}>
            <h2 className={styles.header}>Features</h2>
            <br/>
            <h3 className={styles.featureHeader}>Crime Data Mapping</h3>
            <br/>
            <p className={styles.blurb}>Plan safer routes with real-time local crime data that highlights potential risk areas, enabling users to make informed decisions and navigate their surroundings with greater confidence and peace of mind.</p>
            <br/>
            <h3 className={styles.featureHeader}>Real-Time Location Sharing</h3>
            <br/>
            <p className={styles.blurb}>Effortlessly share your real-time location with trusted contacts for added security, ensuring peace of mind, especially when traveling alone or navigating unfamiliar areas.</p>
            <br/>
            <h3 className={styles.featureHeader}>Emergency Alerts</h3>
            <br/>
            <p className={styles.blurb}>Activate a loud alarm to instantly alert nearby people in case of danger, drawing attention to your situation and providing immediate support while deterring potential threats.</p>
            <br/>
            <h3 className={styles.featureHeader}>Snap and Record</h3>
            <br/>
            <p className={styles.blurb}>Capture photos, videos, or audio of your surroundings to enhance your security, document incidents, and preserve evidence if needed for future reference or reporting.</p>
        </div>
        <div className={styles.section8Img}>
            <Image className={styles.sectionImg1} src='/images/Monochrome_White.png' alt="picture" width={250} height={270} />
        </div>
        <h2 className={styles.sectionHeader}>Branding</h2>
        <div className={styles.section8}>
            <h3 className={styles.brandingHeader}>Logo</h3>
            <p className={styles.blurb}> Beep’s logo thoughtfully combines a pin icon with a current location symbol to represent the app’s core feature of mapping and location-sharing. At the same time, the negative space between these elements forms an abstract "B" for "Beep," reinforcing the brand’s identity and emphasizing the seamless integration of navigation and safety.</p>
        </div>
        <div className={styles.section8_2Img}>
            <Image className={styles.sectionImg2} src='/images/colours.png' alt="picture" width={750} height={230} />
            <br/>
            <Image className={styles.sectionImg3} src='/images/coloursinspo.png' alt="picture" width={750} height={430} />
        </div>
        <div className={styles.section8_2}>
            <h3 className={styles.brandingHeader}>Colour Scheme</h3>
            <br/>
            <p className={styles.blurb}> Beep’s color scheme incorporates a vibrant cool-tone red and a mid-tone vibrant purple, balanced by a neutral black and white, inspired by an image of a city at night that resonates with our app story. </p>
        </div>
        <div className={styles.section8_3Img}>
            <Image className={styles.sectionImg2} src='/images/fonts.png' alt="picture" width={650} height={630} />
            <br/>
        </div>
        <div className={styles.section8_3}>
            <h3 className={styles.brandingHeader}>Typography</h3>
            <br/>
            <p className={styles.blurb}> The Switzer font was chosen for its simplicity, clean lines, and modern aesthetic, ensuring readability and a polished appearance across various digital and print applications. Its balanced proportions and versatile design make it an excellent choice for maintaining a professional and approachable look while enhancing user experience. </p>
        </div>
        <div className={styles.journeymap}>
        <h1 className={styles.header}>User Journey Map</h1>
        <br/>
        <br/>
        <Image className={styles.sectionImg2} src='/images/map.png' alt="picture" width={1150} height={1030} />
        </div>
        <div className={styles.section8_5}>
            <h3 className={styles.header}>Promotional Materials</h3>
            <br/>
            <br/>
            <h2>Business Cards</h2>
            <br/>
            <Image className={styles.sectionImg2} src='/images/BusinessCards.png' alt="picture" width={1150} height={630} />
            <br/>
            <br/>
            <h2>Brochure</h2>
            <br/>
            <Image className={styles.sectionImg2} src='/images/front.png' alt="picture" width={1150} height={630} />
            <Image className={styles.sectionImg2} src='/images/back.png' alt="picture" width={1150} height={630} />
        </div>
            </div>
            <Footer />
        </>
    )
}