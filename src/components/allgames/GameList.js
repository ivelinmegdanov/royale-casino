import { Link } from "react-router-dom";

export const GameList = (props) => {
  const games = props.games;

  return (
    <div
      className="row g-4 justify-content-center collection-grid"
      style={{ position: "relative" }}
    >
      {Object.values(games).map((game) => (
        <div className="allgames-game" key={game.id} data-item={game.provider}>
          <div className="game__item item-layer">
            <div className="game__inner text-center p-0">
              <div className="game__thumb mb-0">
                <img
                  src={game.image}
                  alt="game-img"
                  className="rounded-3 w-100"
                />
              </div>
              <div className="game__overlay">
                <h4>{game.title}</h4>
                <p>Rating: {game.rating}</p>
                <Link to={`/play/${game.id}`} className="default-button">
                  <span>
                    play now <i className="icofont-circled-right" />
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
