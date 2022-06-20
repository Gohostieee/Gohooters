import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage.jsx'
import About from './pages/about.jsx'
import MainMenu from './pages/mainmenu.jsx'
import Login from './pages/login.jsx'
import Account from './pages/account.jsx'
import Welcome from './pages/Welcome.jsx'
import Services from './pages/services.jsx'
import "./styles/mice.css"
import Selector from "./components/Selector.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App overflow-y-visible overflow-x-hidden">
      <BrowserRouter>
       <Routes>
        
        <Route path="/" element={<><Home /> <Selector/></>} />
        <Route path="About" element={<About/>} />
        <Route path="mainmenu" element={<MainMenu/>} />
        <Route path="login" element={<Login/>} />
        <Route path="Account" element={<Account/>} />
        <Route path="Welcome" element={<Welcome/>} />
        <Route path="services" element={<Services/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
