import { Jackpot } from "../jackpot/Jackpot";
import { Welcome } from "../welcome/Welcome";
import { Banner } from "../banner/Banner";
import { motion } from "framer-motion"; 

export const Home = () => {
  return (
    <motion.div className="home-page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Banner />
      <Jackpot />
      <Welcome />
    </motion.div>
  );
};
