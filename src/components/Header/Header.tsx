import React from "react";

import { ReactComponent as Logo } from "./assets/Logo.svg";

import s from "./Header.module.scss";

const Header: React.FC = ({ children }) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        {children}
      </div>
    </header>
  );
};

export default Header;
