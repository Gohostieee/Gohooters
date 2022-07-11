import "../styles/cyberpunk.css"
import Swheel from "../components/VScrollwheel.jsx"
import "../styles/glitch.css"
import computers from "../images/lain.gif"
import goodBye from "../images/slowWindLain.gif"
import vanish from "../images/lainsmall2.gif"
import Lain from "../images/171273.gif"
import lainRoom from "../images/lainRoom.gif"
import vanishLain from "../images/slowVanish.gif"
import smallLain from "../images/smallLain2.gif"
import shoulderLain from "../images/shoulderHand.gif"


//829-796-1496
export default function MainMenu(){

	if(JSON.parse(localStorage.getItem('user'))==null){window.location.href='/login'}



	return(
		<>
			<div class=	"absolute h-screen w-screen  bg-black" data-theme="cyberpunk">
				<Swheel options={[['ABOUT','/welcome',vanish],["SERVICES","/services",lainRoom],['CAREER','/about',computers],["RESUME","/resume",smallLain],["CONTACTS","/contacts",shoulderLain],["ACCOUNTS","/login",vanishLain],["BACK","/",Lain]]}/>


			</div>
		</>
	)
}