import "../styles/cyberpunk.css"
import Swheel from "../components/VScrollwheel.jsx"
import "../styles/glitch.css"




//829-796-1496
export default function MainMenu(){





	return(
		<>
			<div class=	"absolute overflow-hidden h-screen w-screen  bg-black" data-theme="cyberpunk">
				<Swheel options={[['about','/about'],['entry','/']]}/>


			</div>
		</>
	)
}