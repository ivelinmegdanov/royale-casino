import { useFetch } from "../customhooks/useFetch";
import { JackpotGame } from "./JackpotGame";
import { Link } from "react-router-dom";

export const Jackpot = () => {
  const {
    data: games,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games.json"
  );
  return (
    <div className="jaqport padding-top padding-bottom">
      <div className="container">
        <div className="section-header">
          <h2>MOST POPULAR GAMES</h2>
          <p>Play our most popular casino games and win one of the biggest Jackpots today!</p>
        </div>
        <div className="section-wrapper">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="jaqport__right">
                <div className="jaqport__top">
                  <div className="jaqport__title">
                    <div className="jaqport__title-title">
                      <h4>Running Jackpots - TOP GAMES</h4>
                    </div>
                    <div className="jaqport__title-button">
                      <Link to="/games" className="default-button">
                        <span>
                          browse all games <i className="icofont-circled-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="jaqport__body">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {games && <JackpotGame games={games} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
