import {Component} from "react"
import {Link} from "react-router-dom"
import $ from "jquery"

export default class VScrollwheel extends Component{
	constructor(props){
		super(props)
		console.log(props.options)
		this.opts = [[],[]]
		props.options.forEach((x)=>{
			console.log(x)
			this.opts[0].push(this.createOpt(x))
			this.opts[1].push(x[2])

		})
		this.state={
			currOpt:0,

		}

	}
	switchUp(x){
		console.log("hm")
		switch(x){
			case 1:
				console.log("oop")
				if(this.opts[0].length<= this.state.currOpt+1){this.setState({currOpt:0});return;}
				this.setState({currOpt:this.state.currOpt+1})
	            break;

			break;

			case 2:
				if(0>this.state.currOpt-1){this.setState({currOpt:this.opts[0].length-1});return;}
				this.setState({currOpt:this.state.currOpt-1})

	            console.log("oop")

			break;
		}
	}
	componentDidMount(){
		const prop = this
		console.log(this.opts[1],"tumor")
		setTimeout(function (){
			console.log(prop,"blink")
		$(document).keydown(function (e){
			





			switch (e.which){

           		case 13:

                	$("#selectr").trigger("click")
	            	break;
	            case 37:    // key left, right, up, and down
	            	prop.switchUp(2)
	            	break;
	            case 39:    // key right
	            	prop.switchUp(1)
					
	                break;
	            }
		})
	},100)

	}
	createOpt(opt){
		/*NOTES ON <A> VS <LINK> FOR SOME REASON LINK MESSES UP AND RUNS US BACK A PAGE 
		AKA: WHEN WE TRY TO GO SOMEWHERE, WE GO TO THAT PAGE THEN GO BACK TO OUR STARTING
		POSITION, DOING ESSENTIALLY NOTHING BUT REFRESHING THE PAGE, WILL LOOK MORE INTO THIS LATER


		future me note: I still haven't:x
		*/
		return (<a href={opt[1]}><p id = "selectr" href="/" class  = "text-white btn-primary btn-outline btn text-l   glitch border-b font-medium">{opt[0]}</p></a>)
	}

	render(){
		return(
			<>
			<h2 class="hero cyberpunk layers mt-12 " data-text="EGO DEATH"><span>MAIN MENU</span></h2>
		     <p class = "text-white text-xl glitch mt-2 underline underline-offset-4 font-medium"> 卡罗琳</p>
				<p class = "text-white text-xl glitch underline underline-offset-4 font-medium">执子之手，与子偕老</p>
				 <img src={this.opts[1][this.state.currOpt]} class = "m-auto sm:mt-12 mt-4 border-white border p-8 sm:h-[55%]"/>

			<div class="flex flex-row relative sm:mt-16 mt-8 justify-center">

<button onClick = {()=> {console.log("glizzy",this); this.switchUp(2)}} class="btn option btn-outline btn-primary glitch h-[50%] w-[70px] mr-4 text-center text-2xl font-thin layers " data-text="LEFT">⇐</button>
<div class=" flex flex-row relative text-center overflow-hidden justify-center min-w-[180px]  w-[15%] border-x">
					{this.opts[0][this.state.currOpt]}


				</div>
<button onClick = {()=> {console.log("glizzy",this); this.switchUp(1)}} class="btn option btn-outline btn-primary glitch w-[70px] ml-4 text-center text-2xl font-thin layers " data-text="RIGHT">⇒</button>


</div>
</>
			)
	}


	
}