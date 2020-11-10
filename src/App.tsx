import React from "react";

import "./styles/global.scss";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import s from "./App.module.scss";

import Header from "./components/Header";
import HeaderMenu, { HeaderMenuItem } from "./components/HeaderMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

const App: React.FC = () => {
  const routes = {
    home: "/",
    pokedex: "/pokedex",
  };

  const menuItems: HeaderMenuItem[] = [
    {
      id: 1,
      label: "Home",
      to: routes.home,
    },
    {
      id: 2,
      label: "Pokédex",
      to: routes.pokedex,
    },
  ];

  return (
    <Router>
      <div className={s.app}>
        <Header>
          <HeaderMenu items={menuItems} />
        </Header>
        <div className={s.contentContainer}>
          <Switch>
            <Route path={routes.pokedex}>
              <Pokedex />
            </Route>
            <Route path={routes.home}>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
