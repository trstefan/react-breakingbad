import React from "react";

export const CharCard = ({ char }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={char.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{char.name}</h1>
          <p>Actor name: {char.portrayed}</p>
          <p>Nickname: {char.nickname}</p>
          <p>Birthday: {char.birthday}</p>
          <p>Status: {char.status}</p>
        </div>
      </div>
    </div>
  );
};
