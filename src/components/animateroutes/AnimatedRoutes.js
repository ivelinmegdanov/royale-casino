import { Allgames } from "../pages/Allgames";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Play } from "../pages/Play";
import { Register } from "../pages/Register";
import Reset from "../pages/Reset";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Promotions } from "../pages/Promotions";
import { Contact } from "../pages/Contact";
import { Profile } from "../pages/Profile";
import { Deposit } from "../pages/Deposit";
import { Userlist } from "../adminpanel/Userlist";
import { Adminpanel } from "../pages/Adminpanel";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/promotions" element={<Promotions />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/games" element={<Allgames />}></Route>
        <Route path="/adminpanel" element={<Adminpanel />}></Route>
        <Route path="/adminpanel/userlist" element={<Userlist />}></Route>
        <Route path="/play/:gameId" element={<Play />}></Route>
        <Route path="/profile/:userId" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
