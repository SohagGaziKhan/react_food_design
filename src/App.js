import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewLetter from "./components/NewLetter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Experts />
      <NewLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
