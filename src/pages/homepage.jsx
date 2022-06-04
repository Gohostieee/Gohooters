import "../styles/cyberpunk.scss"
import "../styles/glitch.scss"
import { Link } from "react-router-dom";
export default function Home(){
	return (
		<>
			<div class="absolute overflow-hidden h-screen w-screen bg-black" data-theme="cyberpunk">

				<div id="wrap ">
					<h2 class="hero cyberpunk layers mt-44" data-text="Gohooters"><span>Gohooters</span></h2>
		      		<Link to="/about" ><button class="btn btn-outline btn-primary glitch text-[3vh] font-thin layers mt-16 " data-text="Enter">Enter</button></Link>
		      	</div>

			</div>


		</>

	)
}