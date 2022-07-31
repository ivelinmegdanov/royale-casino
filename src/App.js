import { Preloader } from "./components/common/Preloader";
import { ScrollTop } from "./components/common/ScrollTop";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/pages/Home";
import { Allgames } from "./components/allgames/Allgames";
import { NotFound } from "./components/pages/NotFound";
import { Register } from "./components/pages/Register";
import { Login } from "./components/pages/Login";
import { Play } from "./components/pages/Play";
import Reset from "./components/pages/Reset";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Preloader />
        <ScrollTop />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/reset" element={<Reset />}></Route>
            <Route path="/games" element={<Allgames />}></Route>
            <Route path="/play/:gameId" element={<Play />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
