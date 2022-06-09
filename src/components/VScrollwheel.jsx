import {Component} from "react"
import {Link} from "react-router-dom"


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


	}
	createOpt(opt){
		return (<Link to= {`/${opt}`} ><p class = "text-white text-3xl m-auto glitch underline underline-offset-4 font-medium">{opt}</p></Link>)
	}

	render(){
		return(

<div class=" flex flex-row flex-nowrap relative overflow-hidden justify-center relative bottom-[-80vh] w-[40vh] m-auto border-x">
					{this.opts[this.state.currOpt]}


				</div>

			)
	}


	
}