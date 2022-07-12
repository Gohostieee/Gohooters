
import Lain from "../images/lainsmall2.gif"
import Chatbubble from "../components/Chatbubble.jsx"

export default function(){




	return( 
		<>
			<div class=" overflow-y-visible h-screen w-screen bg-black relative flex flex-col items-center" data-theme="cyberpunk">

			<img src={Lain} class=" lg:h-[40%] mt-16 mb-8 relative p-16 border-x" />
			
			<Chatbubble function = {()=>{localStorage.setItem('visited','true');window.location.href="/login"}}text="

			Hey there! Welcome to my flat, this place is what I like to call Gohost's (aka me) school of thought, this is essentially a place for
			anyone to learn about any skills they might be interesting in, devoid of any judgement and worthless degrading metrics.
			
			[EOF]


			I myself specialize in software engineering, so a lot of the topics on this website are going to be centered around that, I'm going to
			add a way for anyone to contribute, however if as of the time of reading this I haven't done so, or you simply have any features you'd 
			like to see added, feel free to reach out to me! I got a contacts section further in.

			[EOF]

			I ain't gonna bore you with any more exposition tho, go ahead and jump right in! If you don't got an account, go ahead and sign up if you haven't!


			"/>


			</div> 

		</>


		)
}