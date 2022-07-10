import {Component} from "react"
import $ from "jquery"


export default class Modal extends Component{

	constructor(){
		super()
	}
	componentDidMount(){
		console.log(this.props.button)
		this.props.button.forEach(function(x){
			console.log(x)
			$(x).click(function (e){
				console.log("clicked")
				$(".Modal").removeClass("hidden")
			})
			
		})
		
	}
	render(){

		return(
			<div class="overflow-hidden absolute z-[100] hidden h-screen w-screen bg-[rgba(0,0,0,0.8)] flex flex-col items-center  Modal" data-theme="cyberpunk">
				
				<p class="text-white text-center bg-black z-[101] w-[90%] sm:w-[40%] sm:min-w-[390px] text-4xl p-8 border sm:mt-[20%] mt-[40%] mb-16 QuickSand">{this.props.text}</p>
				<div class="flex flex-row">
					<button onClick={()=>{$(".Modal").addClass("hidden")}}  class="btn option btn-outline mr-3 ml-3 btn-primary glitch sm:text-2xl text-sm font-thin layers">GO BACK</button>
					<button onClick={()=>{this.props.approved()}} class="btn option btn-outline mr-3 ml-3 btn-primary glitch text-sm sm:text-2xl font-thin layers">CONTINUE</button>
				</div>
			</div>


			)
	}
}