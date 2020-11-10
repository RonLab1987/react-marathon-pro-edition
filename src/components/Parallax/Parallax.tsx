import React, { useState, useEffect } from "react";

import s from "./Parallax.module.scss";

import PokeBallRPng from "./assets/PokeBallR.png";
import CloudSmallPng from "./assets/CloudSmall.png";
import PokeBallPng from "./assets/PokeBall.png";
import CloudBigPng from "./assets/CloudBig.png";
import PikachuPng from "./assets/Pikachu.png";
import { MousePosition } from "./types";

const Parallax = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  const translate = (
    position: MousePosition,
    multiplier: MousePosition
  ): string => {
    return `translate(${position.x * multiplier.x}px, ${
      position.y * multiplier.y
    }px)`;
  };

  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{ transform: translate(mousePosition, { x: -0.03, y: 0.02 }) }}
      >
        <img src={PokeBallRPng} alt="PokeBall R Team" />
      </div>
      <div
        className={s.cloud}
        style={{ transform: translate(mousePosition, { x: 0.03, y: 0.01 }) }}
      >
        <img src={CloudSmallPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{ transform: translate(mousePosition, { x: 0.03, y: 0.03 }) }}
      >
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        className={s.pokeBall}
        style={{ transform: translate(mousePosition, { x: 0.02, y: 0.02 }) }}
      >
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{ transform: translate(mousePosition, { x: 0.1, y: -0.05 }) }}
      >
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
