import { Jackpot } from "../jackpot/Jackpot";
import { Welcome } from "../welcome/Welcome";
import { Banner } from "../banner/Banner";
import { motion } from "framer-motion";
import { useFetch } from "../customhooks/useFetch";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect } from "react";

export const Home = () => {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
  }, [user, loading]);

  let url;
  if (user) {
    url = `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`;
  }
  const { data: currUser, isPending, error } = useFetch(url);

  const deleteUser = () => {
    try {
      fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`,
        {
          method: "DELETE",
        }
      ).then(data => console.log("DELETED WITH FETCH"));
    } catch (err) {
      console.log(err);
    }
    user
      .delete()
      .then(function () {
        alert("User is Deleted")
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!isPending && user && !error) {
    if(Object.values(currUser)[0].isDeleted){
      deleteUser();
    }
  }
  return (
    <motion.div
      className="home-page"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      <Jackpot />
      <Welcome />
    </motion.div>
  );
};
