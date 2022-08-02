import { useParams } from "react-router-dom";
import { useFetch } from "../customhooks/useFetch";
import { PlayGame } from "../playgame/PlayGame";
import { motion } from "framer-motion";

export const Play = () => {
  const { gameId } = useParams();

  const {
    data: games,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games/-N8J2jMp_09UfqW0pXh2.json"
  );

  let game;
  if(games){
    game = games.find(x => x.id === gameId);
  }

  return (
    <motion.div  intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {game && <PlayGame game={game} />}
    </motion.div>
  );
};
