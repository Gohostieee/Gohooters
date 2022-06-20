import {Component,useEffect} from "react"
import "../styles/cyberpunk.css"
import "../styles/gyro.css"
import "../styles/mice.css"
import "../styles/quicksand.css"
import "../styles/glitch.css"
import careerJson from "../pages/json/careers.json"
import Selector from "./Selector.jsx"
import {Link} from "react-router-dom"
import $ from "jquery"



export default class Careers extends Component {
	constructor(){
		super()
		this.state = {
			count:0,
			career:"h u fh"

		}
		this.currUrl=""
		this.selectedOption = ""
		
	}


	changeCareer(Career){
		this.selectedOption=Career 

		console.log(this.state.career)
		this.setState({count:1,career:Career},()=>{

		})
	
	}

	goBack(){
		this.setState({count:0})
	}
	funcfunc(){
		switch(this.state.count){
			case 0:
				return(
					<div class="m-auto border-x-2 h-[60%] mt-12 w-[80%] flex-col flex justify-between mt-16 mb-16">
					
					<div class="flex  flex-row justify-center option " onClick={()=> this.changeCareer("COLLEGE PROFESSOR")}>

							<p class = "text-white text-2xl QuickSand mice  careerOpt opt-1" optNum="1" onclick={()=> this.changeCareer("COLLEGE PROFESSOR")} id="selected">COLLEGE PROFESSOR </p>

						</div>
						<div class="flex flex-row justify-center option " onClick={()=> this.changeCareer("DATA ENGINEER")}>
							<p class = "text-white text-2xl QuickSand careerOpt  " optNum="2" onClick={()=> this.changeCareer("DATA ENGINEER")}> DATA ENGINEER  </p>
						</div>
						<div class="flex flex-row justify-center option "onClick={()=> this.changeCareer("FULLSTACK DEVELOPER")} >
							<p class = "text-white text-2xl QuickSand careerOpt " optNum="3" onClick={()=> this.changeCareer("FULLSTACK DEVELOPER")}>  FULLSTACK DEVELOPER  </p>
						</div>
						<div class="flex flex-row justify-center option "onClick={()=> this.changeCareer("API ENGINEER")}>
							<p class = "text-white text-2xl QuickSand careerOpt " optNum="4" onClick={()=> this.changeCareer("API DEVELOPER")}>  API DEVELOPER  </p>
						</div>
						<div class="flex flex-row justify-center option " onClick={()=>{window.location.href="/mainmenu"}}>
							<p class = "text-white text-2xl QuickSand careerOpt " optNum="4">  BACK  </p>
						</div>
					<Selector/>

					</div>


				)


			break;
			case 1:
			
				return(
					<>
						<div class="m-auto border-x-2 h-[70%] mt-12 w-[80%]  mt-12 mb-12 overflow-y-visible">
				<div class="flex flex-row justify-center mb-10 ">

					<p class = "text-white text-3xl QuickSand mice careerOpt opt-1" optNum="1" id="selected">{this.state.career}	</p>
					
				</div>
				<p class="text-white text-xl ml-[8vh] mr-[8vh] p-8 text-justify border  QuickSand">{careerJson[this.selectedOption][0]}
				<br/>
				<br/>
				<div class="flex-row flex justify-center mr-6" onClick={()=>{$("#careerUrl")[0].click()}}>
				<a href={careerJson[this.selectedOption][1]} class="option text-white mt-2" target="_blank" id="careerUrl">{careerJson[this.selectedOption][1]}</a>
				</div>
				</p>
				
				<div class="mt-16 left-4 relative bottom-0 flex flex-row" onClick={()=> this.goBack()}>

				<p class = "text-white text-xl whitespace-nowrap option mt-2 QuickSand mice careerOpt w-[1vh] "onClick={()=> this.goBack()} optNum="1" id="selected">BACK</p>
				</div>
			</div>
				<Selector/>

			</>
			)


			break;

		}


	}

	componentDidMount(){// WHY IS USEEFFECT RUNNING TWICE??? IT WORKED FINE BEFORE??? LIKE HUH????
		
			
	}
	
	render() {
		return (
			<>
				{this.funcfunc()}
			</>

		)
	}
}