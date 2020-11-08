import React from "react";
import Btn from "../../components/Btn/Btn";

import s from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.left}>
        <Btn onClick={() => null}>Hello</Btn>
      </div>
      <div className={s.right} />
    </div>
  );
};
export default Home;
