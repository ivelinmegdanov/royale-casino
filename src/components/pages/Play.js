import { useParams } from "react-router-dom";
import { useFetch } from "../customhooks/useFetch";
import { PlayGame } from "../playgame/PlayGame";

export const Play = () => {
  const { gameId } = useParams();
    console.log(gameId);

  const {
    data: games,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games/-N8DZBd5QfV6uSsPwOuS.json"
  );

  let game;
  if(games){
    game = games.find(x => x.id == gameId);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {game && <PlayGame game={game} />}
    </div>
  );
};
