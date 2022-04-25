import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="board">
      <Header />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
