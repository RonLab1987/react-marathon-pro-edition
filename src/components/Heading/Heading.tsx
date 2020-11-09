import React from "react";
import cn from "classnames";
import { HeadingProps } from "./types";

import s from "./Heading.module.scss";

const getRenderProps = (level: number): { tag: string; classNames: string } => {
  let headingLevel = level;
  if (level < 0) {
    headingLevel = 1;
  } else if (level > 6) {
    headingLevel = 6;
  }
  return {
    tag: `h${headingLevel}`,
    // @ts-ignore
    classNames: cn(s.root, s[`h${headingLevel}`]!),
  };
};

const Heading: React.FC<HeadingProps> = ({ children, level }) => {
  const { tag, classNames } = getRenderProps(level);
  return React.createElement(tag, { className: classNames }, children);
};

export default Heading;
