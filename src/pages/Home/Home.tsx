import React from "react";
import Btn, { BtnType } from "../../components/Btn";
import Parallax from "../../components/Parallax";

import s from "./Home.module.scss";
import Heading from "../../components/Heading";

const Home: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.left}>
          <Heading level={1}>
            Find <span style={{ fontWeight: 400 }}>all your favorite</span>{" "}
            Pokemon
          </Heading>
          <Heading level={2}>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </Heading>

          <Btn type={BtnType.Primary} onClick={() => null}>
            See pokemons
          </Btn>
        </div>
        <div className={s.right}>
          <Parallax />
        </div>
      </div>
    </div>
  );
};
export default Home;
