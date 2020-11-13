import React from "react";
import { navigate } from "hookrouter";
import Btn, { BtnType } from "../../components/Btn";

import s from "./NotFound.module.scss";
import Heading from "../../components/Heading";
import PageContainer, {
  PageContainerType,
} from "../../components/PageContainer";

import { RoutePaths } from "../../routes";

import TeamRocketPng from "./assets/TeamRocket.png";

const NotFound: React.FC = () => {
  return (
    <PageContainer type={PageContainerType.Danger} center>
      <div className={s.root}>
        <img src={TeamRocketPng} alt="The rocket team has won this time." />
        <Heading level={1}>
          <span className={s.lightText}>The rocket team</span> has won this
          time.
        </Heading>
        <Btn type={BtnType.Accent} onClick={() => navigate(RoutePaths.Home)}>
          Return
        </Btn>
      </div>
    </PageContainer>
  );
};
export default NotFound;
