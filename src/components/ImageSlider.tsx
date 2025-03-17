import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function ImageSwitcher() {
  const images = ["/image1.jpg", "/image2.jpg"];
  const [index, setIndex] = useState(0);

  const switchImage = () => {
    setIndex(index === 0 ? 1 : 0);
  };

  return (
    <div>
      <Image 
        src={images[index]} 
        alt="Switchable" 
        width={300} 
        height={300}
      />
      <br />
      <button onClick={switchImage}>
        Switch Image
      </button>
    </div>
  );
}

