import { GameList } from "./GameList";
import { useFetch } from "../customhooks/useFetch";

export const Allgames = () => {

  const { data : games, isPending, error } = useFetch("https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games/-N8J2jMp_09UfqW0pXh2.json");

  return (
    <section className="collection-section padding-top padding-bottom">
      <div className="container">
        <div className="section-wrapper">
          <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
            <li className="is-checked" data-filter="*">
              All games
            </li>
            <li data-filter=".collection-one" className="">
              New games
            </li>
            <li data-filter=".collection-two" className="">
              Top games
            </li>
            <li data-filter=".collection-three" className="">
              Table games
            </li>
          </ul>
          <div
            className="row g-4 justify-content-center collection-grid"
            style={{ position: "relative" }}
          >
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {games && <GameList games={games} />}
          </div>
        </div>
      </div>
    </section>
  );
};
