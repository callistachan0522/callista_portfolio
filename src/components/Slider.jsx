"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Slider.module.css"; // Import CSS module

const images = [
  "/images/image2.png",
  "/images/image3.png",
  "/images/image10.png",
  "/images/main.png",
];

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <motion.div
        className={styles.sliderTrack}
        animate={{ y: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={src} alt={`Slide ${index}`} width={600} height={600} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;