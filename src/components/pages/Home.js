import { Jackpot } from "../jackpot/Jackpot";
import { Welcome } from "../welcome/Welcome";
import { Banner } from "../banner/Banner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Home = () => {
  function useDelay(number) {
    const [gate, setGate] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setGate(true);
      }, number);
    });
    return gate;
}

const delayRender = useDelay(10);

  return (
    <motion.div className="home-page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Banner />
      <Jackpot />
      <Welcome />
    </motion.div>
  );
};
