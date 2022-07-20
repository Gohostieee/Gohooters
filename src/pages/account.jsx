import { initializeApp } from "firebase/app";
import {useEffect,useState,useRef} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import Err from "../components/minimalError.jsx"
import UserFolders from "../components/userFolders.jsx"
const api = axios.create({baseURL:"http://localhost:3005/users/pfp"})
const mySqlApi = axios.create({baseURL:"http://localhost:3001"})

const Account =() =>{
		const userInfo = JSON.parse(localStorage.getItem('user'))
		const [imgSrc,useImgSrc] = useState(), [passVisible,usePass]=useState(0),[edit,useEdit]=useState('false'),[refresh,useRefresh]=useState(0);
		const text = useRef(), error = useRef(null);
		let imgUrl;
		async function GetImage(){
				await api.get(`/?user=${userInfo['user']}`).then(url=>{
				imgUrl=url['data'];

			})
				useImgSrc(imgUrl);

			}
		useEffect(() => {
			 
			text.current.innerHTML = userInfo['about']
			GetImage();


		},[])
		const SaveAbout= ()=>{
			mySqlApi.post("/user/update",
			{
				newInfo:text.current.innerHTML,
				target:"about",
				username:userInfo['user'],
				password:userInfo['pass']
			}

			).then(response => {
				console.log(response)
				if(response.data['update']=='passed'){
					userInfo['about']=text.current.innerHTML;
					localStorage.setItem('user',JSON.stringify(userInfo));

				}
			})
			useEdit('false');
			
		}
		const UpdateLocalStorage = async ()=>{
			//empty array came back == user/pass combination not found
				await mySqlApi.get(`/user/getInfo/Master?user=${userInfo['user']}&pass=${userInfo['pass']}`).then(response=>{
					if(response)
					{
						userInfo['about']=response.data['about']
						userInfo['email']=response.data['email']
						console.log(response.data)
						console.log(userInfo)

						localStorage.setItem('user',JSON.stringify(userInfo))}
				})
				useRefresh(refresh+1)

		}
		const multiplyChar=(char,times)=>{
			let string = char
			for(let x = 0; x<times;x++){
				string+=char;
			}

			return <p onClick = {function ChangePass (){usePass(1)}} class = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" > password:  {string}         👁  </p>;
		}
		return(
			<div class=" h-screen overflow-y-auto overflow-x-hidden w-screen bg-black relative " data-theme="cyberpunk">
				<div class="relative mt-8 relative ">
					<p class = "text-white text-xl mt-1 glitch underline underline-offset-4 font-medium">卡罗琳</p>
					<p class = "text-white text-xl mt-2 glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				</div>
				<div class = "flex flex-col mt-8 justify-center relative">
					<img className = "w-[250px] m-auto mb-2 border p-4"src={imgSrc}/>
					<p onClick = {()=>{UpdateLocalStorage()}}className = "text-white md:text-lg sm:text-base mb-6 text-cyan-400 underline underline-offset-4 QuickSand font-thin m-auto" >🔁Resync Information🔁</p>
					<p class = "text-white text-2xl QuickSand font-thin border-b-2 md:w-[70%] w-[90%] lg:w-[50%] pb-4 m-auto" >Account Details:</p>
					<div class="flex sm:flex-row flex-col justify-center sm:mt-12 md:w-[70%] w-[90%] lg:w-[50%] m-auto">
					<p class = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" >name: {userInfo['user']}</p>
					{
						passVisible
						? <p onClick = {function ChangePass (){usePass(0)}} className = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" >password: {userInfo['pass']} 👁 </p>
						: multiplyChar(" ▓ ",6)}
					<p className  = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" >email: {userInfo['email']}</p>

					</div>
					<div className = "flex flex-col m-auto">
					<p class = "text-white text-xl glitch underline underline-offset-4 QuickSand mt-16 font-thin">About me</p>
					<Err error = {error.current}/>
					{edit === 'true'
					?<div className="flex flex-row justify-center">
					<p onClick={function ChangeEdit(){SaveAbout()}}className = "text-white mr-2 text-xl glitch underline underline-offset-4 QuickSand mt-4 font-thin">🖉Save🖉</p>
					<p onClick={function ChangeEdit(){useEdit("false");text.current.innerHTML=userInfo['about']}}className = "text-white text-xl ml-2 glitch underline underline-offset-4 QuickSand mt-4 font-thin">❌Cancel❌</p>
					</div>
					:<p onClick={function ChangeEdit(){useEdit('true')}}className = "text-white text-xl glitch underline underline-offset-4 QuickSand mt-4 font-thin">🖉Edit🖉</p>}
					
					</div>
					<p ref = {text} contentEditable = {edit} class="text-white lg:text-xl md:w-[80%] lg:w-[50%] w-[90%] m-auto lg:p-8 text-justify  lg:border border-x p-4 pt-0 mt-12  QuickSand"></p>
					<UserFolders userInfo={userInfo} api={mySqlApi}/>
					<div><Link to="/mainmenu"><button class="btn option btn-outline glitch w-[120px] mt-8 text-center text-2xl font-thin layers " data-text="BACK">BACK</button></Link></div>
				</div>

			</div>


			)
	
}

export default Account;