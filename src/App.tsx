import React from "react";

import "normalize.css";
import "./styles/global.scss";

import s from "./App.module.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.contentContainer} />
      <Footer />
    </div>
  );
};

export default App;
