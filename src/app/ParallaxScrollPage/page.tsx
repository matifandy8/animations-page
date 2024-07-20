"use client";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles.css";

const ParallaxScrollPage = () => {
  return (
    <div className="container">
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.5}
          style={{ backgroundImage: "url(/sky.png)" }}
        ></ParallaxLayer>
        <ParallaxLayer
          speed={1}
          style={{ backgroundImage: "url(/mountain.png)" }}
          factor={2}
          offset={0.2}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={0.5}>
          <h1 className="title" style={{ textAlign: "center" }}>
            Parallax Scroll Effect
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          speed={1}
          factor={2}
          style={{ backgroundImage: "url(/person-mountain.png)" }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxScrollPage;
