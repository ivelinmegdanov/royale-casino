import { Allgames } from "../pages/Allgames";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Play } from "../pages/Play";
import { Register } from "../pages/Register";
import Reset from "../pages/Reset";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/games" element={<Allgames />}></Route>
        <Route path="/play/:gameId" element={<Play />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
};
