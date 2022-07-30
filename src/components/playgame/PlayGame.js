export const PlayGame = (game) => {
    console.log(game);
  return (
    <div>
      <iframe src={game.link} width="640" height="480" />
    </div>
  );
};
