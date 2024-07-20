"use client";

import "./styles.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <main className="main">
      <h1 className="title">Horizontal Scroll Carousel </h1>

      <div className="container" ref={targetRef}>
        <div className="gallery">
          <motion.div className="images" style={{ x }}>
            <div className="image">
              <img src="https://picsum.photos/600/600?random=1" />
            </div>

            <div className="image">
              <img src="https://picsum.photos/600/600?random=2" />
            </div>

            <div className="image">
              <img src="https://picsum.photos/600/600?random=3" />
            </div>

            <div className="image">
              <img src="https://picsum.photos/600/600?random=4" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
