import React from "react";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

export const path = {
  home: "/",
  pokedex: "/pokedex",
};

export const routes = {
  [path.home]: () => <Home />,
  [path.pokedex]: () => <Pokedex />,
};

export default routes;
