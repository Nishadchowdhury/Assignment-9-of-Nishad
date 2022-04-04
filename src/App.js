import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Routes>

      </Routes>

    </div>
  );
}

export default App;
