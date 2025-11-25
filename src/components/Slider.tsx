import { useEffect, useState } from "react";
import Slider1 from "../assets/image/Slaider_1.avif";
import bgSlider1 from "../assets/image/bg-1.avif";
import Slider2 from "../assets/image/Slaider_2.avif";
import bgSlider2 from "../assets/image/bg-2.avif";
import Slider3 from "../assets/image/Slaider_3.avif";
import bgSlider3 from "../assets/image/bg-3.avif";

const slides = [
  { bg: bgSlider1, img: Slider1 },
  { bg: bgSlider2, img: Slider2 },
  { bg: bgSlider3, img: Slider3 },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);    
  }, []);

  return (
    <main className="slideshow-container">
      {slides.map((slide, i) => (
        <div key={i} className={`mySlides fade ${i === index ? "active" : ""}`}>
          <img src={slide.bg} className="slide-bg-full" />
          <img src={slide.img} className="slide-bg" />
        </div>
      ))}
    </main>
  );
}
