import {Component} from "react"
import $ from "jquery"


export default class AccLogin extends Component{


	constructor(){
		super()
		this.state={
			inputs:{"login":<>
						{this.createInput(["What is your username?","username"])}
						{this.createInput(["What is your password?","password"])}
					
					</>,
					"signup":<>
							{this.createInput(["What is going to be your username?","username"])}
							{this.createInput(["What is going to be your password?","password"])}
							{this.createInput(["What is your email?","email"])}

					</>,

				},
			request:"signup"
		}
	}
	createInput(x){
		return (
					<div class="form-control w-[80%] max-w-xs text-white m-auto">
					  <label class="label">
					    <span class="label-text text-white">{x[0]}</span>
					  </label>
					  <input type="text" placeholder="Type here" id = {x[1]}class="input mb-8 input-bordered w-full max-w-xs bg-transparent border-white rounded-l " />
					</div>
			)
	}
	handleInput(x){
		console.log(x)
		if(x != this.state.request){
			this.setState({request:x})
		}
	}
	componentDidMount(){
	}
	render(){
	

		return(
				<>
				<div class="border-x mt-8 flex flex-col justify-c  w-[30%] m-auto mt-24 min-w-[350px]">
					
				{this.state.inputs[this.state.request]}
				</div>
		      	<button onClick={() =>{this.handleInput('login')}} class="btn option btn-outline w-[25%] min-w-[330px] btn-primary glitch text-xl font-thin layers mt-16 " id="loginButton" data-text="WELCOME BACK">LOGIN</button>
		      	<br/>
				<button onClick={() =>{this.handleInput('signup')}} class="btn option btn-outline w-[25%] min-w-[330px] btn-primary glitch text-xl font-thin layers mt-16 " id="signupButton" data-text="DO YOU WISH TO PROCEED.">CREATE ACCOUNT</button>

		      	</>
			)
	}
}