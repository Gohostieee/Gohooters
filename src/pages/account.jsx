import { initializeApp } from "firebase/app";
import {Component} from 'react'
import { getStorage, ref } from "firebase/storage";

const Account =() =>{

	const storage = getStorage() 
	

		return(
			<div class="overflow-hidden h-screen w-screen bg-black relative " data-theme="cyberpunk">
				<div class="relative mt-8 relative ">
					<h2 class="hero cyberpunk layers " data-text="LET GO OF YOURSELF"><span>YOUR ACCOUNT</span></h2>
					<p class = "text-white text-xl mt-1 glitch underline underline-offset-4 font-medium">卡罗琳</p>
					<p class = "text-white text-xl mt-2 glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
					
				</div>
				<div class = "flex flex-col mt-8 justify-center relative">

					<p class = "text-white text-2xl QuickSand font-thin border-b-2 w-[40%] pb-4 m-auto" >Account Details:</p>
					<div class="flex flex-row justify-center mt-16 w-[80%] m-auto">
					<p class = "text-white text-xl QuickSand font-thin m-auto" >name: {localStorage.getItem("userInfo")}</p>
					<p class = "text-white text-xl QuickSand font-thin m-auto" >password:{localStorage.getItem("os.userInfo;")}</p>
					<p class = "text-white text-xl QuickSand font-thin m-auto" >email	:{localStorage.getItem("os.userInfo;")}</p>

					</div>
				</div>
			</div>


			)
	
}

export default Account;