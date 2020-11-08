import React from "react";

import s from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        Made with{" "}
        <span role="img" aria-label="love">
          🤎
        </span>
      </div>
    </footer>
  );
};

export default Footer;
