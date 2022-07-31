import { useFetch } from "../customhooks/useFetch";
import { JackpotGame } from "./JackpotGame";

export const Jackpot = () => {
  const {
    data: games,
    isPending,
    error,
  } = useFetch(
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/games/-N8J2jMp_09UfqW0pXh2.json"
  );
  return (
    <div className="jaqport padding-top padding-bottom">
      <div className="container">
        <div className="section-header">
          <h2>MOST POPULAR GAMES</h2>
          <p>
            At Modeltheme, we show only the best websites and portfolios built
            completely with passion, simplicity and creativity !
          </p>
        </div>
        <div className="section-wrapper">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="jaqport__right">
                <div className="jaqport__top">
                  <div className="jaqport__title">
                    <div className="jaqport__title-title">
                      <h4>NEW GAMES IN</h4>
                    </div>
                    <div className="jaqport__title-gametime">
                      <ul
                        className="countdown count-down"
                        data-date="Nove 01, 2022 00:00:00"
                      >
                        <li className="clock-item">
                          <span className="count-number days">1</span>
                          <p className="count-text">Days</p>
                        </li>

                        <li className="clock-item">
                          <span className="count-number hours">1</span>
                          <p className="count-text">Hour</p>
                        </li>

                        <li className="clock-item">
                          <span className="count-number minutes">1</span>
                          <p className="count-text">Minu</p>
                        </li>

                        <li className="clock-item">
                          <span className="count-number seconds">1</span>
                          <p className="count-text">Seco</p>
                        </li>
                      </ul>
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
