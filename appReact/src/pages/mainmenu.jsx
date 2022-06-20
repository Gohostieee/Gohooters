import "../styles/cyberpunk.css"
import Swheel from "../components/VScrollwheel.jsx"
import "../styles/glitch.css"
import computers from "../images/lain.gif"
import goodBye from "../images/slowWindLain.gif"
import vanish from "../images/lainsmall2.gif"
import Lain from "../images/171273.gif"
import lainRoom from "../images/lainRoom.gif"



//829-796-1496
export default function MainMenu(){





	return(
		<>
			<div class=	"absolute overflow-hidden h-screen w-screen  bg-black" data-theme="cyberpunk">
				<Swheel options={[['ABOUT','/welcome',vanish],["SERVICES","/services",lainRoom],['CAREER','/about',computers],["BACK","/",Lain]]}/>


			</div>
		</>
	)
}