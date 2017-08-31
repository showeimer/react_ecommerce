import React from 'react';

const Game = ({game}) => {
  return (
    <div className="gameItem">
      <img src={game.mediumImage} alt={game.name} />
      <h2>{game.name}</h2>
      <h3>${game.salePrice}</h3>
      <a href="#">Add to Cart</a>
      <details>
        <summary>Game Description</summary>
        <p>{game.shortDescription}</p>
      </details>
    </div>
  )
}

export default Game;
