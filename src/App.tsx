import React, { useState, useEffect } from "react";

import "./styles/global.scss";

import { usePath, useRoutes } from "hookrouter";
import s from "./App.module.scss";

import Header from "./components/Header";
import HeaderMenu, { HeaderMenuItem } from "./components/HeaderMenu";
import Footer from "./components/Footer";

import { routes, routePaths } from "./routes";
import NotFound from "./pages/NotFound";

const menuTemplate = [
  {
    label: "Home",
    to: routePaths.Home,
  },
  {
    label: "Pokédex",
    to: routePaths.Pokedex,
  },
];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<HeaderMenuItem[]>(
    menuTemplate.map(
      (item, index): HeaderMenuItem => ({
        id: index,
        isActive: false,
        ...item,
      })
    )
  );
  const match = useRoutes(routes);
  const currentPath = usePath();

  useEffect(() => {
    setMenuItems((state) =>
      state.map((item) => ({
        ...item,
        isActive: item.to === currentPath,
      }))
    );
  }, [currentPath]);

  return (
    <div className={s.app}>
      {match ? (
        <Header>
          <HeaderMenu items={menuItems} />
        </Header>
      ) : null}
      {match || <NotFound />}
      <Footer />
    </div>
  );
};

export default App;
