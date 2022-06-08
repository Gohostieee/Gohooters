import "../styles/cyberpunk.css"
import "../styles/gyro.css"
import "../styles/mice.css"
import "../styles/quicksand.css"
import "../styles/glitch.css"
import Careers from "../components/careers.jsx"
import $ from "jquery"
import {useEffect} from "react"


export default function About(){

	return(
		<div class="absolute overflow-hidden h-screen w-screen bg-black mice" data-theme="cyberpunk">
			<h2 class="hero cyberpunk layers mt-8" data-text="EGO DEATH"><span>ABOUT</span></h2>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium"> 卡罗琳</p>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				<Careers/>



		</div>
	)
}

