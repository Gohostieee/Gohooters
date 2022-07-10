import Options from "../components/options.jsx"
import Selector from "../components/Selector.jsx"
import {Link} from "react-router-dom"

const Contacts = () =>{
	return(
		<>

			<div class=	"absolute overflow-y-visible h-screen w-screen  bg-black" data-theme="cyberpunk">
			<h2 class="hero cyberpunk layers mt-12 " data-text="EGO DEATH"><span>MAIN MENU</span></h2>
		     <p class = "text-white text-xl glitch mt-2 underline underline-offset-4 font-medium"> 卡罗琳</p>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				
				<div class="m-auto border-x-2 mt-12 w-[90%] flex-col flex justify-evenly mt-4 mb-12 overflow-y-visible">
					
					<div class="flex flex-row justify-center sm:mb-12 lg:mb-16 mt-12 option ">
		 				<a href="https://github.com/Gohostieee" target="_blank"><p onClick={()=>{}}class="text-white md:text-xl underline underline-offset-4 text-lg lg:text-2xl QuickSand mice  careerOpt opt-1">GITHUB: https://github.com/Gohostieee</p></a>
		 			</div>
		 			<div class="flex flex-row justify-center sm:mb-12 lg:mb-16 mt-12 option ">
		 				<p onClick={()=>{}}class="text-white md:text-xl underline underline-offset-4 text-lg lg:text-2xl QuickSand mice  careerOpt opt-1">Email: joshua32eb@gmail.com</p>
		 			</div>
		 			<div class="flex flex-row justify-center sm:mb-12 lg:mb-16 mt-12 option ">
		 				<a href="https://www.linkedin.com/in/joshua-rodriguez-48b8aa22b/" target="_blank"><p onClick={()=>{}}class="text-white md:text-xl underline underline-offset-4 text-lg lg:text-2xl QuickSand mice  careerOpt opt-1">LinkedIn: https://www.linkedin.com/in/joshua-rodriguez-48b8aa22b/</p></a>
		 			</div>
		 			<div class="flex flex-row justify-center sm:mb-12 lg:mb-16 mt-12 option ">
		 				<a href="https://discord.com/" target="_blank"><p onClick={()=>{}}class="text-white md:text-xl underline underline-offset-4 text-lg lg:text-2xl QuickSand mice  careerOpt opt-1">Discord: Gohost#4055</p></a>
		 			</div>
		 			<div class="flex flex-row justify-center sm:mb-12 lg:mb-16 mt-12 option ">
		 				<Link to="/mainmenu"><p onClick={()=>{}}class="text-white md:text-xl underline underline-offset-4 text-lg lg:text-2xl QuickSand mice  careerOpt opt-1">BACK</p></Link>
		 			</div>
					<Selector/>

				</div>
			</div>

		</>

		);
}



export default Contacts;