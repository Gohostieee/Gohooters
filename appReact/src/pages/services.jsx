import React,{useState,useEffect} from "react";
import Options from "../components/options.jsx"
import Selector from "../components/Selector.jsx"


 const Services=()=>{

 	
	return(

			<>
				<div class=	"absolute h-screen overflow-x-hidden w-screen  bg-black" data-theme="cyberpunk">
					<h2 class="hero cyberpunk layers mt-4" data-text="EGO DEATH"><span>ABOUT</span></h2>
					<p class = "text-white text-xl glitch mt-2 underline underline-offset-4 font-medium"> 卡罗琳</p>
					<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
					<Options options={[["Tutoring",["Depending on my schedule I'm willing to give anyone private classes on any sort of subjects. Having such a broad background I am qualified to teach you on all the fundamental pillars of programming, as well some more advanced topics, pushing deeper into the tech world. Focusing more on industry standards with clean and consice coding practices",<br/>,<br/>,"SOME OF THESE TOPICS INCLUDE",<br/>,<br/>,<div class="border  lg:p-6 pt-4 pb-4 max-w-[700px] m-auto"> Frontend / Backend development <br/> APIs <br/>  cloud computing  <br/> GCP, AWS, Azure <br/>Linux bash (trust me, It's important)<br/>Big O notation and Algorithms<br/>Differential/Integral calculus (Very important, depending on your field)<br/>Data Engineering and Scraping</div>],["CONTACT","/contacts"]],["Freelancing",""],["Fulltime work",""]]}/>
				</div>

			</>

		)
}
export default Services;