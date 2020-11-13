import React from "react";
import { navigate } from "hookrouter";
import Btn, { BtnType } from "../../components/Btn";
import Parallax from "../../components/Parallax";

import s from "./Home.module.scss";
import Heading from "../../components/Heading";
import PageContainer, {
  PageContainerType,
} from "../../components/PageContainer";

import { RoutePaths } from "../../routes";

const Home: React.FC = () => {
  return (
    <PageContainer type={PageContainerType.Accent} center>
      <div className={s.left}>
        <Heading level={1}>
          Find <span style={{ fontWeight: 400 }}>all your favorite</span>{" "}
          Pokemon
        </Heading>
        <Heading level={2}>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </Heading>

        <Btn
          type={BtnType.Primary}
          onClick={() => navigate(RoutePaths.Pokedex)}
        >
          See pokemons
        </Btn>
      </div>
      <div className={s.right}>
        <Parallax />
      </div>
    </PageContainer>
  );
};
export default Home;
