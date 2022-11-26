import "./App.css";
import Books from "./Components/Books/Books";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Books />
    </div>
  );
}

export default App;
