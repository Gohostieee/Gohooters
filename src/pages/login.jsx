import AccLogin from "../components/accLogin.jsx"
export default function Login(){

	return(
		<div class="absolute overflow-x-hidden h-screen w-screen bg-black relative " data-theme="cyberpunk">
			<div class="relative sm:top-[5%]  h-screen">
				<h2 class="hero cyberpunk layers mt-8" data-text="EGO DEATH"><span>LOGIN</span></h2>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">卡罗琳</p>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				<AccLogin/>
				
			</div>
		</div>
	)
}

