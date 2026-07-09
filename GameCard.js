import React from "react";

function GameCard({ game, onView }) {
  return (
    <div className="game-card">

      <div className="game-image">
        <h1>{game.image}</h1>
      </div>

      <h2>{game.name}</h2>

      <p className="genre">{game.genre}</p>

      <h3>₹ {game.price}</h3>

      <button
        className="btn"
        onClick={() => onView(game)}
      >
        Buy Now
      </button>

    </div>
  );
}

export default GameCard;