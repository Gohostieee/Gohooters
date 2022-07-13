import { initializeApp } from "firebase/app";
import {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const api = axios.create({baseURL:"http://localhost:3005/users/pfp"})
const Account =() =>{
		const userInfo = JSON.parse(localStorage.getItem('user'))
		const [imgSrc,useImgSrc] = useState(), [passVisible,usePass]=useState(0);

		let imgUrl;
		async function GetImage(){
				await api.get(`/?user=${userInfo['user']}`).then(url=>{
				console.log(url)
				imgUrl=url['data'];

			})
				useImgSrc(imgUrl);

			}
		useEffect(() => {
			 
			GetImage();
			

		},[])
		console.log(imgSrc,'alot')
		const multiplyChar=(char,times)=>{
			let string = char
			for(let x = 0; x<times;x++){
				string+=char;
			}
			console.log(string,"what")

			return <p onClick = {function ChangePass (){usePass(1)}} class = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" > password:  {string}         👁  </p>;
		}
		return(
			<div class=" h-screen w-screen bg-black relative " data-theme="cyberpunk">
				<div class="relative mt-8 relative ">
					<p class = "text-white text-xl mt-1 glitch underline underline-offset-4 font-medium">卡罗琳</p>
					<p class = "text-white text-xl mt-2 glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				</div>
				<div class = "flex flex-col mt-8 justify-center relative">
					<img className = "w-[250px] m-auto mb-8 border p-4"src={imgSrc}/>
					<p class = "text-white text-2xl QuickSand font-thin border-b-2 md:w-[70%] w-[90%] lg:w-[50%] pb-4 m-auto" >Account Details:</p>
					<div class="flex sm:flex-row flex-col justify-center sm:mt-12 md:w-[70%] w-[90%] lg:w-[50%] m-auto">
					<p class = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" >name: {userInfo['user']}</p>
					{
						passVisible
						? <p onClick = {function ChangePass (){usePass(0)}} className = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" >password: {userInfo['pass']} 👁 </p>
						: multiplyChar(" ▓ ",6)}
					<p className  = "text-white md:text-lg sm:text-base  QuickSand mt-16 sm:mb-0 font-thin m-auto" >email: {userInfo['email']}</p>

					</div>
					<p class = "text-white text-xl glitch underline underline-offset-4 QuickSand mt-16 font-thin">About me</p>
					<p class="text-white lg:text-xl text-l md:w-[80%] lg:w-[50%]  w-[90%] m-auto lg:p-8 text-justify  lg:border border-x p-4 pt-0 mt-12  QuickSand">{userInfo['about']}</p>
					<Link to="/mainmenu"><button class="btn option btn-outline glitch w-[120px] mt-8 text-center text-2xl font-thin layers " data-text="BACK">BACK</button></Link>
							
				</div>
			</div>


			)
	
}

export default Account;