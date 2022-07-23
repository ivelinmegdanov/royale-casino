export const GameList = (props) => {
    const games = props.games;

    return ( 
        <div className="game-list">
            {games.map((game) => (
              <div
                className="allgames-game"
                key={game.id}
              >
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
                      <p>{game.author}</p>
                      <a href="/" className="default-button">
                        <span>
                          play now <i className="icofont-circled-right" />
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    );
}