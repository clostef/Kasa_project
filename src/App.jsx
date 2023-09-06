import Header from "./header/Header.jsx";
import Home from "./home/Home.jsx";
import Footer from "./footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-nav">
        <Header />
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
