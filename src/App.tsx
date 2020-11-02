import React from "react";
import cn from "classnames";

import s from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={s.container}>
      <h1 className={cn(s.greeting, "text-center", "fill-width")}>
        I&apos;am App
      </h1>
    </div>
  );
};

export default App;
