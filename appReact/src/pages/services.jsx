import React,{useState,useEffect} from "react";
import Options from "../components/options.jsx"
import Selector from "../components/Selector.jsx"


 const Services=()=>{

 	
	return(

			<>
				<div class=	"absolute h-screen overflow-x-hidden w-screen  bg-black" data-theme="cyberpunk">
					<h2 class="hero cyberpunk layers" data-text="EGO DEATH"><span>ABOUT</span></h2> 
					<p class = "text-white text-xl glitch underline underline-offset-4 font-medium"> 卡罗琳</p>
					<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
					<Options exit={()=>{window.location.href="mainmenu"}} options={[["Tutoring",["Depending on my schedule I'm willing to give anyone private classes on any sort of subjects. Having such a broad background I am qualified to teach you on all the fundamental pillars of programming, as well some more advanced topics, pushing deeper into the tech world. Focusing more on industry standards with clean and consice coding practices",<br/>,<br/>,"SOME OF THESE TOPICS INCLUDE",<br/>,<br/>,<div class="border  lg:p-6 pt-4 pb-4 max-w-[700px] m-auto"> Frontend / Backend development <br/> APIs <br/>  cloud computing  <br/> GCP, AWS, Azure <br/>Linux bash (trust me, It's important)<br/>Big O notation and Algorithms<br/>Differential/Integral calculus (Very important, depending on your field)<br/>Data Engineering and Scraping</div>],["CONTACT",()=>{window.location.href="/contacts"},"BACK",(e)=>{e(0)}]],["Freelancing",[<br/>,"If you want to hire me for some short-term one of project depending on the nature of said project I am available at a discussable rate, I am well-versed in various aspects of software engineering, mainly focusing on:",<div class="border mt-4 mb-4 lg:p-6 pt-4 pb-4 max-w-[700px] m-auto"> Frontend Development(React, Angular, and Vue)<br/> Express-based Node APIs<br/> Flask-based Python APIs<br/>MongoDB | DynamoDB | Firebase<br/>MySQL | SQL <br/> Industry Standard Python<br/> Matplotlib | Pandas | Jupyter | Numpy <br/> OOP/Functional programming<br/> Django Backend Development<br/>Cloud computing services (AWS and GCP) </div>,"If you wish to connect you can head on forward to the contacts section or write me at joshua32eb@gmail.com"],["CONTACT",()=>{window.location.href="/contacts"},"BACK",(e)=>{e(0)}]],["Fulltime work",[<br/>,<div class="text-justify sm:pr-0 sm:pl-0 sm:border-hidden pr-6 pl-6 border-x"> I am open to and currently looking for formal employment. An experienced engineer, I set out on my career as most newby programmers do nowadays, by starting out with Python. When I started out with Python, I picked up almost every single concept with relative ease due to the fact that I already had a more informal background in game development creating a couple of games on a JS/C++ (with the C++ influences being particularly dumbed-down) based language called GML. Starting out I dipped my toes in most aspects of python, from web development to (naturally) machine learning. I ended up leaning heavily towards the data side of things, particularly data engineering, picking up many DB frameworks along the way. Later in life I seeked to expand my skillset and become a more wellrounded developer with the ability to act independently. This led me to learn javascript and the dreaded world of .js frameworks I heard so much about, focusing on React and adopting NodeJS with express. If you seek to connect and inquire more about me, you can either write to me at joshua32eb@gmail.com, or head over to the contacts section of my website.</div>,<div class="border mt-4 mb-4 lg:p-6 pt-4 pb-4 max-w-[700px] m-auto"> Frontend Development(React (predominantly React), Angular, and Vue )<br/> Express-based Node APIs<br/> Flask-based Python APIs<br/>MongoDB | DynamoDB | Firebase<br/>MySQL | SQL <br/> Industry Standard Python<br/> Matplotlib | Pandas | Jupyter | Numpy <br/> OOP/Functional programming<br/> Django Backend Development<br/>Cloud computing services (AWS and GCP) </div>,"If you wish to connect you can head on forward to the contacts section or write me at joshua32eb@gmail.com"],["CONTACT",()=>{window.location.href="/contacts"},"BACK",(e)=>{e(0)}]]]}/>
				</div>

			</>

		)
}
export default Services;