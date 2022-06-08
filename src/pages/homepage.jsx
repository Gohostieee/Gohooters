import "../styles/cyberpunk.css"
import "../styles/glitch.css"
import "../styles/dimitri.css"
import { Link } from "react-router-dom";
import LainComp from "../images/171273.gif"
export default function Home(){
					console.log("whaft")

	return (
			<div class=	"absolute overflow-hidden h-screen w-screen  bg-black" data-theme="cyberpunk">

				<div id="wrap ">
					<h2 class="hero cyberpunk layers mt-24" data-text="Gohooters"><span>Gohooters</span></h2>
		      		<img src={LainComp} class = "m-auto mt-6  border-white border-x-2 h-[55vh]"/>
		      		<Link to="/about" ><button class="btn option btn-outline btn-primary glitch text-[3vh] font-thin layers mt-16 " data-text="Enter">Enter</button></Link>
		      	</div>

			</div>



	)
}