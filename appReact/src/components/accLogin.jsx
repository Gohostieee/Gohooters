import {Component} from "react"
import $ from "jquery"
import axios from "axios"
import "../styles/quicksand.css"

const api = axios.create({baseURL:"http://localhost:3001/api/accounts"})
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
			request:"signup",
			errors:""
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
	createError(x){
		console.log("hm",x)
		if(!x){return;}
		return (


<>
							<span class="text-red-500 text-l QuickSand tracking-[3px] text-thin underline underline-offset-4">{x}</span>

  					</>
			)

	}

	async handleInput(x,pass,user,email){
		console.log("whatsd",pass)
		if(x != this.state.request){
			this.setState({request:x})
			return;
		}
		switch(x){
			case "login":


			break;
			case 'signup':

				await api.get(`/?request=signup&password=${pass}&username=${user}&email=${email}`,{request:'signup',password:"12345"}, {
					crossorigin:true,
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },).then((e)=>{


    	switch(e.data[0]['reason']){
    		case 'passShort':
    			this.setState({errors:this.createError('Your password is too short!')})

    		break;
    		case 'passNumbers':
    			this.setState({errors:this.createError('Your password needs numbers!')})


    		break
    		case 'passCapital':
    			this.setState({errors:this.createError('Your password needs capital letters!')})
    		break
    		case 'passLowercase':
    			this.setState({errors:this.createError('Your password needs lowercase letters!')})
    		break;
    		case 'passSuccess':
    			switch(e.data[1]['reason']){
    				case 'userAlphaNum':
    					this.setState({errors:this.createError('Your username cannot have special characters!')})
    				break;
    				case 'userLong':
    					this.setState({errors:this.createError('Your username can only be ten characters long!')})


    				break;
    				case 'userShort':


    					this.setState({errors:this.createError('Your username is empty!')})
    				break;
    				case "userSuccess":
    					switch(e.data[2]['reason']){
    						case 'emailError':
    							this.setState({errors:this.createError("Email isn't valid!")})
    						break;
    						case 'emailSuccess':

    							this.setState({errors:''})
    							break;

    					}

    				break
    				
    			}
    		break;
    		default:
		    	this.setState({errors:"Unknown error occurred?"})



    		break
    	}
    })
				/*
				axios.get('', {
 					request: 'signup',
  					password: '12345',

				},{'Access-Control-Allow-Credentials':true}).then((response) => {
				  console.log(response,"what");
				}, (error) => {
				  console.log(error);
				});
				*/
			break;
		}
	}
	componentDidMount(){
	}
	render(){
	

		return(
				<>
				<div class="border-x mt-8 flex flex-col justify-c  w-[30%] m-auto mt-24 min-w-[350px]">
					
				{this.state.inputs[this.state.request]}
				{this.state.errors}
				</div>
		      	<button onClick={() =>{this.handleInput('login')}} class="btn option btn-outline w-[25%] min-w-[330px] btn-primary glitch text-xl font-thin layers mt-16 " id="loginButton" data-text="WELCOME BACK">LOGIN</button>
		      	<br/>
				<button onClick={() =>{this.handleInput('signup',$("#password").val(),$("#username").val(),$("#email").val())}} class="btn option btn-outline w-[25%] min-w-[330px] btn-primary glitch text-xl font-thin layers mt-16 " id="signupButton" data-text="DO YOU WISH TO PROCEED.">CREATE ACCOUNT</button>

		      	</>
			)
	}
}