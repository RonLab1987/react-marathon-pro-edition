import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

import cn from "classnames";
import s from "./HeaderMenu.module.scss";
import { HeaderMenuProps } from "./types";

const HeaderMenuLink: React.FC<{ to: string }> = ({ children, to }) => {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <Link to={to} className={cn(s.menuLink, { [s.activeLink]: match })}>
      {children}
    </Link>
  );
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  return (
    <div className={s.root}>
      {items.map(({ to, label, id }) => {
        return (
          <HeaderMenuLink to={to} key={id}>
            {label}
          </HeaderMenuLink>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
