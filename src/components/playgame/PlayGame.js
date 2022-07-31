export const PlayGame = (game) => {
  return (
    <div className="play-container">
      <div className="game-container">
        <h2>{game.game.title} - {game.game.lines} Lines - {game.game.reels} Reels - x{game.game.maxwin} Max Win</h2>
        <iframe
          className="game-iframe"
          title={game.game.title}
          src={game.game.link}
        />
      </div>
    </div>
  );
};
