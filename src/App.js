import { Preloader } from "./components/common/Preloader";
import { ScrollTop } from "./components/common/ScrollTop";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/pages/Home";
import { Allgames } from "./components/allgames/Allgames";
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
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/games" element={<Allgames />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
