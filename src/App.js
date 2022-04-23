import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from  './Navbar';
import Home from "./Pages/Home";
import Puchho from "./Pages/Puchho";
import Siksha from './Pages/Siksha';
import Profile from './Pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Puchho" element={<Puchho/>} />
      <Route path="/Siksha" element={<Siksha/>} />
      <Route path="/Profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;