import { Preloader } from "./components/common/Preloader";
import { ScrollTop } from "./components/common/ScrollTop";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Banner } from "./components/banner/Banner";
import { Jackpot } from "./components/jackpot/Jackpot";
import { Games } from "./components/games/Games";
import { Welcome } from "./components/welcome/Welcome";
import { Faq } from "./components/faq/Faq";
import { Allgames } from "./components/allgames/Allgames";

function App() {
  return (
    <div className="App">
      <Preloader />

      <ScrollTop />

      <div className="body-shape d-none">
        <img src="images/shape/body-shape.png" alt="shape" />
      </div>

      <Header />

      <Banner />

      <Jackpot />

      <Allgames/>

	    <Games />

      <Welcome />

      <Faq />

      <Footer />
    </div>
  );
}

export default App;
