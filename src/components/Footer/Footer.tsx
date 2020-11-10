import React from "react";

import s from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.root}>
      <div className={s.container}>
        Made with &nbsp;
        <span role="img" aria-label="love">
          🤎
        </span>
      </div>
    </footer>
  );
};

export default Footer;
