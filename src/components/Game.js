import React from 'react';

import {Link} from 'react-router-dom';

const Game = ({game}) => {
  return (
    <div className="gameItem">

      <div className="gameContent">
        <img src={game.mediumImage} alt={game.name} />
        <div className="gameInfo">
          <h2>{game.name}</h2>
          <div className="purchase">
            <h3>${game.salePrice}</h3>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      <details>
        <summary>Game Description</summary>
        <p>{game.shortDescription}</p>
      </details>
    </div>
  )
}

export default Game;
