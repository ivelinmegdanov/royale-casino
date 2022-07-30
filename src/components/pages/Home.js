import { Jackpot } from "../jackpot/Jackpot";
import { Welcome } from "../welcome/Welcome";
import { Banner } from "../banner/Banner";

export const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Jackpot />
      <Welcome />
    </div>
  );
};
