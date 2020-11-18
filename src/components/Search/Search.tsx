import React from "react";

import s from "./Search.module.scss";

import { SearchProps } from "./types";

const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const search = event.target.value.trim() || undefined;
    onChange(search);
  };
  return (
    <input
      type="text"
      placeholder={placeholder || "search"}
      className={s.root}
      onChange={changeHandler}
    />
  );
};

export default React.memo(Search);
