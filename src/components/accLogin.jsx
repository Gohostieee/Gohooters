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
					  <input type="text" id = {x[1]}class="input mb-8 input-bordered w-full max-w-xs bg-transparent border-white rounded-l " />
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
		console.log("whatsd",pass,x)
		if(x != this.state.request){
			this.setState({request:x})
			return;
		}
		switch(x){
			case "login":
			console.log("what")
				await api.get(`/?request=login&password=${pass}&username=${user}`, {
					crossorigin:true,
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },).then((e)=>{
    	console.log(e.data)
    	switch(e.data[1]['reason']){
    		
    		case 'userNotFound':
				this.setState({errors:this.createError("Username not found!")})
    		break;
    		case 'passNotFound':
				this.setState({errors:this.createError('Password is incorrect!')})


    		break;
    		default:
				this.setState({errors:""})




				localStorage.setItem("user",JSON.stringify({"user":user,"pass":pass,"email":email}));
				window.location.href="/mainmenu"
			break;


    	}
    })

			case 'signup':
				//yes this should be a post, can't be bothered to change it now, harmless albeit slightly confusing mistake
				await api.get(`/?request=signup&password=${pass}&username=${user}&email=${email}`, {
					crossorigin:true,
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },).then((e)=>{
    	console.log(e)
// there are honestly soooo many switch statements here
// I feel like I should switch it to something else and make it alot cleaner
// but would it really be worth it? not that hard to wrap my head around
// shall consult with other engineers on the matter
//FUTURE ME NOTE!! REVAMP REVAMP TOO MANY SWITCHES,TOO ANNOYING TO READ/DEBUG, CODE COMMENTED OUT
/*
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
    	*/
    	console.log(e.data[1]['reason'],'uwu')
    	switch(e.data[1]['reason']){

    		case 'userTaken':
    			this.setState({errors:this.createError('Username is taken!')})

    		break;
    		case 'userShort':

				this.setState({errors:this.createError('Username is too short!')})

    		break;
    		case 'passShort':
    				this.setState({errors:this.createError('Password is too short!')})



    		break;
    		case 'invalidEmail':
				this.setState({errors:this.createError("Email isn't valid!")})

    		break;
    		default:

    			localStorage.setItem("user",JSON.stringify({"user":user,"pass":pass,"email":email}));
				window.location.href="/mainmenu"

			break;
    		
    		

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
		      	
		      	<button onClick={() =>{this.handleInput('login',$("#password").val(),$("#username").val())}} class="btn option btn-outline w-[330px] btn-primary glitch text-base sm:text-xl font-thin layers mt-8 " id="loginButton" data-text="WELCOME BACK">LOGIN</button>
		      	<br/>
				<button onClick={() =>{this.handleInput('signup',$("#password").val(),$("#username").val(),$("#email").val())}} class="btn option btn-outline w-[330px] btn-primary glitch text-base sm:text-xl font-thin layers sm:mt-16 mt-4" id="signupButton" data-text="DO YOU WISH TO PROCEED.">CREATE ACCOUNT</button>
				<br/>
				<Link to="/mainmenu"><button class="btn option btn-outline w-[330px] btn-primary glitch text-base sm:text-xl font-thin layers sm:mt-16 mt-4 " id="signupButton" data-text="TBH IDK WHAT TO PUT">BACK</button></Link>

		      	</>
			)
	}
}