import resume from "../doc/resume.pdf"

import {Link} from "react-router-dom"


const Resume = () => {









	return(

			<div class="absolute overflow-y-visible h-screen w-screen bg-black mice" data-theme="cyberpunk">
			<h2 class="hero cyberpunk layers mt-2" data-text="EGO DEATH"><span>RESUME</span></h2>
				<p class = "text-white text-xl glitch mt-2 underline underline-offset-4 font-medium"> 卡罗琳</p>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				<p class = " sm:hidden text-white text-lg QuickSand mt-4 font-thin mr-4 ml-4">If you are on mobile then you can't see this pdf, so you can download it <a class="underline underline-offset-4" href={resume} download="Joshua Rodriguez resume.pdf">here</a></p>
				
				<p class = " hidden sm:block text-white text-lg QuickSand mt-4 font-thin mr-4 ml-4">This might be broken right now so you can download it <a class="underline underline-offset-4" href={resume} download="Joshua Rodriguez resume.pdf">here</a></p>
				<Link to ="/mainmenu"><p class = "text-white text-xl glitch mt-4 font-medium">BACK</p></Link>

<embed src={resume}  height="2100px" class="m-auto mt-4 sm:w-[500px] w-[300px] md:w-[800px] lg:w-[1020px]" />

		</div>

	)
}



export default Resume