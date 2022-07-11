import "../styles/cyberpunk.css"
import "../styles/glitch.css"
import "../styles/dimitri.css"
import { Link } from "react-router-dom";
import LainComp from "../images/171273.gif"
export default function Home(){
	if(localStorage.getItem('visited')==='true'){window.location.href='/mainmenu'}
					

	return (
			<div class=	"absolute overflow-y-visible h-screen w-screen  bg-black" data-theme="cyberpunk">

				<div id="wrap ">
					<h2 class="hero cyberpunk layers mt-12" data-text="Gohooters"><span>Gohooters</span></h2>
		      		<img src={LainComp} class = "m-auto mt-16  border-white border-x-2 h-[55%]"/>
		      		<Link to="/welcome" ><button class="btn option btn-outline btn-primary glitch text-xl font-thin layers mt-16 " data-text="Enter">Enter</button></Link>
		      	</div>

			</div>



	)
}