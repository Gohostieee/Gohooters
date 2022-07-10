import {Component} from "react"
import Modal from "./Modal.jsx"
import $ from "jquery"
import Selector from "./Selector.jsx"



export default class Chatbubble extends Component {





	constructor(props){

		super(props)
		this.state={
			currBubble:0,
			currText:"NULL",
			Text:this.props.text.split("[EOF]"),
			Modal:""
			
		}
	}
	componentDidMount(){
		this.setState({Modal:<Modal approved={()=>{this.props.function()}} text = "YOU ARE NOW ABOUT TO LEAVE, ARE YOU SURE YOU WANT TO CONTINUE?" button={[$("#skip")]}/>})
		const text = this.props.text.split("[EOF]")
		this.setState({currText:text[this.state.currBubble].substring(0,1)})
		setInterval(()=>{
			this.setState({currText:text[this.state.currBubble].substring(0,this.state.currText.length+1)})
		},3)
	}
	goNext(){
		if(this.state.currBubble+1<this.state.Text.length){
			this.setState({currBubble:this.state.currBubble+1,currText:""})
	}else{
		$("#skip").click()
	}
	}
	goBack(){
		if(this.state.currBubble-1>=0){
			this.setState({currBubble:this.state.currBubble-1,currText:""})
	}else{
		window.location.href="/mainmenu"
	}
	}
	render(){



		return (
			<>
			<div class="flex-col flex items-center z-50">
				<p class="text-white text-justify bg-black sm:w-[80%] lg:min-w-[700px] lg:w-[40%] w-[90%]  text-base sm:text-2xl ml-[8vh] mr-[8vh] sm:p-8 p-4 border  QuickSand">{this.state.currText+"\u00A0 \u00A0".repeat((this.state.Text[this.state.currBubble].length-this.state.currText.length)/2)}</p>
				<div class = "flex-row flex">
					<button id="skip" class="btn sm:m-5 mt-5 ml-1 mr-1 option btn-outline btn-primary glitch text-sm sm:text-2xl font-thin layers">SKIP</button>
					<button onClick={()=>{this.goBack(this)}} class="btn sm:m-5 mt-5 ml-1 mr-1 option btn-outline btn-primary glitch bg-black sm:text-2xl text-sm font-thin layers">BACK</button>
					<button id="continue" onClick={()=>{this.goNext(this)}} class="btn sm:m-5 mt-5 ml-1 mr-1 option btn-outline btn-primary glitch bg-black sm:text-2xl text-sm font-thin layers">CONTINUE</button>
					<Selector/>
				</div>
			</div>
				{this.state.Modal}

			</>
			)
	}
}