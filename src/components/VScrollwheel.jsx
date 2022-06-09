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
		return (<Link to= {`${opt[1]}`} ><p class = "text-white btn-primary btn-outline btn  text-3xl glitch border-b font-medium">{opt[0]}</p></Link>)
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