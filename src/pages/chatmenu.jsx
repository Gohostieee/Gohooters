import {useRef,useEffect,useState} from "react"
import { io } from "socket.io-client";
import axios from "axios"
import ChatBar from "../components/chatbar.jsx"
import UserList from "../components/userList.jsx"
import {Link} from 'react-router-dom'

	const api = axios.create({baseURL:"http://localhost:3005/users/pfp"})

const ChatMenu = () =>{


	return (
			<>
				<h2 class="hero cyberpunk layers mt-8" data-text="EGO DEATH"><span>UNDER CONSTRUCTION</span></h2>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">卡罗琳</p>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
			<div>
			<p className="text-[15rem] border mt-16 p-8 m-auto w-[400px] sm:w-[450px]">💔</p>
			<div><Link to="/mainmenu"><button class="btn option btn-outline glitch w-[120px] rounded-none mt-8 text-center text-2xl font-thin layers " data-text="BACK">BACK</button></Link></div>

			</div>
			</>

		)
	let userInfo = JSON.parse(localStorage.getItem('user'));												//replace this one with a map later
	let [socket,setSocket] = useState(),[currUser,changeUser]=useState(),[room, setRoom] = useState(),[userList,useUsers] = useState([]), [userImg, usePFP]= useState({});

	useEffect( ()=>{
		const conc = async ()=> {

		const huh = io("http://localhost:6969")
		
		return huh;
	}
		conc().then((huh)=>{
			huh.emit("passInfo",userInfo,"NULL")
			
			huh.on("userList",function UpdateUsers(x){
				useUsers(x);
			})
			huh.emit("getMeUsers","what","idk")

			setSocket(huh)

			


		})
		setRoom("general_01")
	},[])

	
	const userListParse =  () =>{

		let arr = [],img;
		userList.forEach(async (x)=>{
			//img =  GetPFP(x['name']);

			arr.push(
					<UserList x = {x}/>
				)
		})
		return arr;
	}
	const UserChat = (name,about) =>{

	}

	//ref={currMessage} onKeyPress={(e,messages,socket)=>{SendMessage(e,socket)}}



	return(
		<>	
			<div className="absolute w-screen h-screen">
			<div className = "m-auto mt-16 flex flex-row sm:w-[80%] sm:h-[90%]">
				<div className="border w-[75%] flex-col flex">

					<div className="border-b h-[20%] w-[100%]">

					</div>

					<ul className="border-b h-[70%] w-[100%]">
					</ul>
					
					<ChatBar socket = {socket}/>

				</div>
				<ul className ="border border-l-0 max-w-[350px] min-w-[350px]">
					{userListParse()}
				{}
				</ul>
			</div>

			</div>
		</>
	)
}




export default ChatMenu;