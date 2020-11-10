import React from "react";

import cn from "classnames";

import s from "./Btn.module.scss";

import { BtnProps, BtnType } from "./types";

const Btn: React.FC<BtnProps> = ({ children, type, small, onClick }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.primary]: !type || type === BtnType.Primary,
        [s.secondary]: type === BtnType.Secondary,
        [s.accent]: type === BtnType.Accent,
        [s.small]: small,
      })}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Btn;
