import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage.jsx'
import About from './pages/about.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
