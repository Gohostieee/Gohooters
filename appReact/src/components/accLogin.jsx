import {Component} from "react"
import sha256 from 'crypto-js/sha256.js';
import $ from "jquery"
import axios from "axios"
import "../styles/quicksand.css"
import {Link} from "react-router-dom"
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
					<div class="form-control w-[80%]  max-w-xs text-white m-auto">
					  <label class="label">
					    <span class="label-text text-white">{x[0]}</span>
					  </label>
					  <input type="text" placeholder="ACCOUNTS CURRENTLY DISABLED!!" readonly="true" id = {x[1]}class="input mb-8 input-bordered w-full max-w-xs bg-transparent border-white rounded-l " />
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
				api.get(`/?request=login&password=${pass}&username=${user}`, {
					crossorigin:true,
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },).then((e)=>{
    	console.log(e.data)
    	switch(e.data['status']){
    		case "approved":
    			console.log('approved')
    			localStorage.setItem("username", user)

		    	this.setState({errors:''})
		    	window.location.href="/account"

    		break;
    		case "disapproved":

    			this.setState({errors:this.createError('Username or password are wrong!')})


    		break;
    	}
    })

			break;
			case 'signup':

				await api.get(`/?request=signup&password=${pass}&username=${user}&email=${email}`,{request:'signup',password:"12345"}, {
					crossorigin:true,
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },).then((e)=>{
    	console.log(e)
// there are honestly soooo many switch statements here
// I feel like I should switch it to something else and make it alot cleaner
// but would it really be worth it? not that hard to wrap my head around
// shall consult with other engineers on the matter
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
    							console.log("uwu!")
    							switch(e.data[3]['reason']){

    								case 'availableUser':
    							console.log("uwo!")
    									localStorage.setItem("userInfo", {user,pass,email})

		    							this.setState({errors:''})
		    							window.location.href="/account"

    								break
    								case 'takenUser':
    							console.log("uwa!")

		    							this.setState({errors:'User or Email not available!'})

    								break
    							}
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
				<div class="border-x  flex flex-col justify-c w-[30%] m-auto sm:mt-12 mt-8 min-w-[350px]">
					
				{this.state.inputs[this.state.request]}
				{this.state.errors}
				</div>
				<p class="text-white text-justify bg-black sm:w-[80%] lg:min-w-[700px] lg:w-[40%] w-[90%]  text-base sm:text-2xl mt-8 sm:p-8 p-4 border m-auto QuickSand"> Note, I am currently not hosting the api to interface with my account DB soooo, there is no point in trying to login</p>
		      	
		      	<button onClick={() =>{this.handleInput('login',$("#password").val(),$("#username").val())}} class="btn option btn-outline w-[330px] btn-primary glitch text-base sm:text-xl font-thin layers mt-8 " id="loginButton" data-text="WELCOME BACK">LOGIN</button>
		      	<br/>
				<button onClick={() =>{this.handleInput('signup',$("#password").val(),$("#username").val(),$("#email").val())}} class="btn option btn-outline w-[330px] btn-primary glitch text-base sm:text-xl font-thin layers sm:mt-16 mt-4" id="signupButton" data-text="DO YOU WISH TO PROCEED.">CREATE ACCOUNT</button>
				<br/>
				<Link to="/mainmenu"><button class="btn option btn-outline w-[330px] btn-primary glitch text-base sm:text-xl font-thin layers sm:mt-16 mt-4 " id="signupButton" data-text="TBH IDK WHAT TO PUT">BACK</button></Link>

		      	</>
			)
	}
}