import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../customhooks/useFetch";
import { PlayGame } from "../playgame/PlayGame";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Comment } from "../comments/Comment"

export const Play = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading]);

  const { gameId } = useParams();

  const {
    data: games,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games.json"
  );

  let game;
  if(games){
      let holder = Object.values(games);
      game = holder.find(x => x.id === gameId);
  }

  return (
    <motion.div  intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {game && <PlayGame game={game} />}
      {gameId && <Comment gameId={gameId}/>}
    </motion.div>
  );
};
