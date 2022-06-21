
import Lain from "../images/lainsmall2.gif"
import Chatbubble from "../components/Chatbubble.jsx"

export default function(){





	return( 
		<>
			<div class="overflow-y-visible h-screen w-screen bg-black relative flex flex-col items-center" data-theme="cyberpunk">

			<img src={Lain} class=" h-[40%] mt-16 mb-8 relative p-16 border-x" />
			
			<Chatbubble function = {()=>{window.location.href="/mainmenu"}}text="Hey there! Welcome to my website, as you may have noticed, this site isn't exactly your standard little site. It's my personal website so I decided to let my little creative juices run free.[EOF] If you are someone who frequently plays videogames then this interface should be somewhat familiar to you, it's just a website that presents you with very select and limited information at one time, which makes traverse the site by the means of various buttons, there is currently at the time of writing this two types of button arrays, a vertical column of many buttons which normally leads you to content, and an array of two arrow buttons and one button inbetween these which leads you to said content buttons.[EOF]Depending on who you are, you might be coming into here with various expectations. If you are a talent seeker, looking for an idea of my experience on the field, then you should continue onwards and head into the career and courses section, and the contact section in order to connect with me."/>
			</div> 

		</>


		)
}