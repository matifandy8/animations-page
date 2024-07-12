"use client";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxScrollPage = () => {
  return (
    <div>
      <Parallax pages={1}>
        <ParallaxLayer speed={1}>
          <h1>Parallax Scroll Effect</h1>
        </ParallaxLayer>

        <ParallaxLayer speed={1}>
          <div style={{ height: "100vh", backgroundColor: "red" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxScrollPage;
