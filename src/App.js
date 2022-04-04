import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Reviwe from "./Components/Reviwes/Reviwes";
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard'

function App() {

  
  return (
    <div className="App">
      <NavBar />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/reviews' element={<Reviwe />} />
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/blogs'  />
       <Route path='/about'  />
       <Route path='*' element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
