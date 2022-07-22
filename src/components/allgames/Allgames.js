import { useState } from "react";
export const Allgames = () => {
  const [games, setGames] = useState([
    {
      id: 1,
      title: "Wild Shark",
      description:
        "The Wild Shark slot machine invites you to get acquainted with the underwater inhabitants. This is a slot from Amatic and the majority of icons are the images of fish. There are also two icons with special functions: a wild symbol and a scatter, which triggers free spins. During the game, each spin can bring a player up to 250 credits. The slot has 5 reels and 10 adjustable paylines. After getting the winning combinations, you can enter the risk game and multiply the payouts.",
      image: "https://altacdn.com/iw/img/games/66352-wild-shark.jpg",
      gamelink: "https://free-slots.games/games/amatic/wildshark/demo",
      author: "amatic",
    },
    {
      id: 2,
      title: "Wild Shark",
      description:
        "The Wild Shark slot machine invites you to get acquainted with the underwater inhabitants. This is a slot from Amatic and the majority of icons are the images of fish. There are also two icons with special functions: a wild symbol and a scatter, which triggers free spins. During the game, each spin can bring a player up to 250 credits. The slot has 5 reels and 10 adjustable paylines. After getting the winning combinations, you can enter the risk game and multiply the payouts.",
      image: "https://altacdn.com/iw/img/games/66352-wild-shark.jpg",
      gamelink: "https://free-slots.games/games/amatic/wildshark/demo",
      author: "amatic",
    },
    {
      id: 3,
      title: "Wild Shark",
      description:
        "The Wild Shark slot machine invites you to get acquainted with the underwater inhabitants. This is a slot from Amatic and the majority of icons are the images of fish. There are also two icons with special functions: a wild symbol and a scatter, which triggers free spins. During the game, each spin can bring a player up to 250 credits. The slot has 5 reels and 10 adjustable paylines. After getting the winning combinations, you can enter the risk game and multiply the payouts.",
      image: "https://altacdn.com/iw/img/games/66352-wild-shark.jpg",
      gamelink: "https://free-slots.games/games/amatic/wildshark/demo",
      author: "amatic",
    },
    {
      id: 4,
      title: "Wild Shark",
      description:
        "The Wild Shark slot machine invites you to get acquainted with the underwater inhabitants. This is a slot from Amatic and the majority of icons are the images of fish. There are also two icons with special functions: a wild symbol and a scatter, which triggers free spins. During the game, each spin can bring a player up to 250 credits. The slot has 5 reels and 10 adjustable paylines. After getting the winning combinations, you can enter the risk game and multiply the payouts.",
      image: "https://altacdn.com/iw/img/games/66352-wild-shark.jpg",
      gamelink: "https://free-slots.games/games/amatic/wildshark/demo",
      author: "amatic",
    },
  ]);

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
        </div>
      </div>
    </section>
  );
};
