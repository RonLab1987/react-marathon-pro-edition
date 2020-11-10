import React from "react";

import { A } from "hookrouter";

import cn from "classnames";
import s from "./HeaderMenu.module.scss";
import { HeaderMenuProps } from "./types";

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  return (
    <div className={s.root}>
      {items.map(({ to, label, id, isActive }) => {
        return (
          <A
            href={to}
            className={cn(s.menuLink, { [s.activeLink]: isActive })}
            key={id}
          >
            {label}
          </A>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
