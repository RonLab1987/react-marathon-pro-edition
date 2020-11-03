import React from "react";

// @ts-ignore
import Logo from "@/assets/Logo.svg";

import s from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
