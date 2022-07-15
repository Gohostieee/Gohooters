import logo from './logo.svg';
import './App.css';
import "./styles/mice.css"
import {Home, About, MainMenu,Login,Account,Welcome,Services,Contacts,Resume,PersonalMenu, ChatMenu} from "./pages/pageindex.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App overflow-y-visible overflow-x-hidden">
      <BrowserRouter>
       <Routes>
        
        <Route path="/" element={<><Home /></>} />
        <Route path="About" element={<About/>} />
        <Route path="mainmenu" element={<MainMenu/>} />
        <Route path="aboutmenu" element={<PersonalMenu/>} />
        <Route path="login" element={<Login/>} />
        <Route path="myaccount" element={<Account/>} />
        <Route path="Welcome" element={<Welcome/>} />
        <Route path="services" element={<Services/>} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="chatmenu" element={<ChatMenu/>} />
        <Route path="resume" element={<Resume/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
