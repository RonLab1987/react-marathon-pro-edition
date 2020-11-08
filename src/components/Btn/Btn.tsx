import React from "react";

import cn from "classnames";

import s from "./Btn.module.scss";

import { BtnProps, BtnType } from "./types";

const Btn: React.FC<BtnProps> = ({ children, type, onClick }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.primary]: !type || type === BtnType.Primary,
        [s.secondary]: BtnType.Secondary,
        [s.warning]: BtnType.Warning,
      })}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Btn;
