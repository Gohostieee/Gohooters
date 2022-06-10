import "../styles/cyberpunk.css"
import Swheel from "../components/VScrollwheel.jsx"
import "../styles/glitch.css"
import computers from "../images/lain.gif"
import goodBye from "../images/slowWindLain.gif"
import vanish from "../images/lainsmall2.gif"



//829-796-1496
export default function MainMenu(){





	return(
		<>
			<div class=	"absolute overflow-hidden h-screen w-screen  bg-black" data-theme="cyberpunk">
				<Swheel options={[['ACCOUNT','/login',vanish],['CAREER','/about',computers],['BACK','/',goodBye]]}/>


			</div>
		</>
	)
}