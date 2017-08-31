import React from 'react';

const Game = ({game}) => {
  return (
    <div>
      <img src={game.thumbnailImage} alt={game.name} />
      <h2>{game.name}</h2>
      <h3>{game.salePrice}</h3>
      <h4>{game.shortDescription}</h4>
    </div>
  )
}

export default Game;
