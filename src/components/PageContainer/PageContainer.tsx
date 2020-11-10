import React from "react";
import cn from "classnames";
import { PageContainerProps, PageContainerType } from "./types";

import s from "./PageContainer.module.scss";

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  type,
  center,
}) => {
  return (
    <div
      className={cn(s.root, {
        [s.light]: !type || type === PageContainerType.Light,
        [s.dark]: type === PageContainerType.Dark,
        [s.accent]: type === PageContainerType.Accent,
        [s.danger]: type === PageContainerType.Danger,
      })}
    >
      <div
        className={cn(s.container, {
          [s.center]: center,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
