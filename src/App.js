import './App.css';
import monthsJson from './json/months.json'
import {useRef,useState,useEffect} from 'react'
import {Scheduler, Mainpage,Login,Profile} from "./pages/pageindex"
console.log("faleena",Profile)
function App() {
    const [page,usePage] = useState("main");
    useEffect(()=>{console.log(page)},[page])

    switch (page){
        case "main":
            return <Mainpage state = {usePage}/>;

        case "schedule":
            return <Scheduler state = {usePage}/>;
        case "login":
            return <Login state = {usePage}/>
        case "myprofile":
            return <Profile/>

    }
}

export default App;
