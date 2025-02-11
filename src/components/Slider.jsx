"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Slider.module.css"; // Import CSS module

const images = [
  "/images/image2.png",
  "/images/image3.png",
  "/images/image10.png",
  "/images/main.png",
  "/images/coloursinspo.png",
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
            <Image src={src} alt={`Slide ${index}`} width={510} height={350} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;