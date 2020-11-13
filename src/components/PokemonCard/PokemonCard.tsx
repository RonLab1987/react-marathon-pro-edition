import React from "react";

import s from "./PokemonCard.module.scss";
import Heading from "../Heading";
import { PokemonCardProps } from "./types";

const PokemonCard: React.FC<PokemonCardProps> = ({ summary }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <div className={s.titleName}>
          <Heading level={3}>{summary.name_clean}</Heading>
        </div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{summary.stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{summary.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {summary.types.map((type) => (
            <span className={s.label} key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className={s.pictureWrap}>
        <img src={summary.img} alt={summary.name_clean} />
      </div>
    </div>
  );
};

export default React.memo(PokemonCard);
