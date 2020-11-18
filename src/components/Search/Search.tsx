import React from "react";

import s from "./Search.module.scss";

import { SearchProps } from "./types";

const Search: React.FC<SearchProps> = ({ onChange }) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const search = event.target.value.trim() || undefined
    onChange(search)
  }
  return (
    <input type="text" className={s.root} onChange={changeHandler}/>
  );
};

export default React.memo(Search);
