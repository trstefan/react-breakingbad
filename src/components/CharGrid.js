import React from "react";
import { CharCard } from "./CharCard";

export const CharGrid = ({ chars, isLoad }) => {
  return isLoad ? (
    <h1>The data is loading </h1>
  ) : (
    <section className="cards">
      {chars.map((char) => (
        <CharCard key={char.char_id} char={char}></CharCard>
      ))}
    </section>
  );
};
