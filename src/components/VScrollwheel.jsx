import {Component} from "react"
import {Link} from "react-router-dom"
import $ from "jquery"

export default class VScrollwheel extends Component{
	constructor(props){
		super(props)
		console.log(props.options)
		this.opts = []
		props.options.forEach((x)=>{
			console.log(x)
			this.opts.push(this.createOpt(x))

		})
		this.state={
			currOpt:0,

		}

	}

	componentDidMount(){
		const prop = this
		$(document).keydown(function (e){
			





			switch (e.which){

           		case 13:

                	$("#selector").trigger("click")
	            	break;
	            case 37:    // key left, right, up, and down
	               console.log("oop")
					if(prop.opts.length<= prop.state.currOpt+1){prop.setState({currOpt:0});return;}
					prop.setState({currOpt:prop.state.currOpt+1})
	                break;
	            case 39:    // key right
					if(0>prop.state.currOpt-1){prop.setState({currOpt:prop.opts.length-1});return;}
					prop.setState({currOpt:prop.state.currOpt-1})

	                console.log("oop")
	                break;
	            }
		})

	}
	createOpt(opt){
		return (<Link to= {`${opt[1]}`} ><p id = "selector" class  = "text-white btn-primary btn-outline btn  text-3xl glitch border-b font-medium">{opt[0]}</p></Link>)
	}

	render(){
		return(<div class="flex flex-row relative top-[80%] justify-center">

<button class="btn option btn-outline btn-primary glitch w-[100px] mr-16 text-center text-3xl font-thin layers " data-text="LEFT">⇐</button>
<div class=" flex flex-row relative text-center overflow-hidden justify-center min-w-[220px] w-[30%] border-x">
					{this.opts[this.state.currOpt]}


				</div>
<button class="btn option btn-outline btn-primary glitch w-[100px] ml-16 text-center text-3xl font-thin layers " data-text="RIGHT">⇒</button>


</div>
			)
	}


	
}