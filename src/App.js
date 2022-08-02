import { Preloader } from "./components/common/Preloader";
import { ScrollTop } from "./components/common/ScrollTop";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { AnimatedRoutes } from "./components/animateroutes/AnimatedRoutes";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Preloader />
        <ScrollTop />
        <div className="content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
