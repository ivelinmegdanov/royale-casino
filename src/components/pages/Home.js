import { Jackpot } from "../jackpot/Jackpot";
import { Games } from "../games/Games";
import { Welcome } from "../welcome/Welcome";
import { Faq } from "../faq/Faq";
import { Banner } from "../banner/Banner";

export const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Jackpot />
      <Games />
      <Welcome />
      <Faq />
    </div>
  );
};
