import Header from "./header/Header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/Footer.jsx";
import "./App.css";
import Fiche from "./fiche/Fiche.jsx";
import Refresh from "./refresh/Refresh.jsx";
import About from "./about/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container-nav">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fiche/:id" element={<Fiche />} />
            <Route path="/error" element={<Refresh />} />
            <Route path="*" element={<Refresh />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
