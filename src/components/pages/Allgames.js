import { GameList } from "../allgames/GameList";
import { useFetch } from "../customhooks/useFetch";
import { motion } from "framer-motion";

export const Allgames = () => {

  const { data : games, isPending, error } = useFetch("https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games.json");
  console.log(games);

  return (
    <motion.section className="collection-section padding-top padding-bottom"  intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="container">
        <div className="section-wrapper">
          <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
            <li className="filter-buttons is-checked" data-filter="all">
              All
            </li>
            <li data-filter="ct interactive" className="filter-buttons">
              Ct Interactive
            </li>
            <li data-filter="isoftbet" className="filter-buttons">
              ISoftBet
            </li>
            <li data-filter="amatic" className="filter-buttons">
              Amatic
            </li>
            <li data-filter="pragmatic" className="filter-buttons">
              Pragmatic
            </li>
          </ul>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {games && <GameList games={games} />}
          </div>
        </div>
    </motion.section>
  );
};
