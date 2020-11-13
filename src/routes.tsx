import React from "react";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

export enum RoutePaths {
  Home = "/",
  Pokedex = "/pokedex",
}

export const routes = {
  [RoutePaths.Home]: () => <Home />,
  [RoutePaths.Pokedex]: () => <Pokedex />,
};

export default routes;
