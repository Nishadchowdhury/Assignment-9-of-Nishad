import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Reviwe from "./Components/Reviwes/Reviwes";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/reviews' element={<Reviwe />} />
       <Route path='/dashboard'  />
       <Route path='/blogs'  />
       <Route path='/about'  />
      </Routes>

    </div>
  );
}

export default App;
