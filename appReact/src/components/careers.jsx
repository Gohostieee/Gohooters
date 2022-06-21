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

							<p class = "text-white text-2xl QuickSand mice  careerOpt opt-1" optNum="1" onClick={()=> this.changeCareer("COLLEGE PROFESSOR")} id="selected">COLLEGE PROFESSOR </p>

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
						<div class="m-auto lg:border-x-2 h-[70%] mt-12 lg:w-[80%] w-[90%]  mt-12 mb-12 overflow-y-visible">
				<div class="flex flex-row justify-center  lg:mb-10 mb-4 ">

					<p class = "text-white text-3xl QuickSand mice careerOpt opt-1" optNum="1" id="selected">{this.state.career}	</p>
					
				</div>
				<p class="text-white lg:text-xl text-l lg:ml-[8vh] lg:mr-[8vh]  lg:p-8 text-justify  lg:border border-x p-4 pt-0  QuickSand">{careerJson[this.selectedOption][0]}
				<br/>
				<br/>
				<div class="flex-row flex justify-center mr-6 option" onClick={()=>{$("#careerUrl")[0].click()}}>

						<a href={careerJson[this.selectedOption][1]} class=" text-white mt-2 underline underline-offset-2 lg:text-xl text-sm" target="_blank" id="careerUrl">{careerJson[this.selectedOption][1]}</a>
				</div>
				</p>
				
				<div class="lg:mt-16 left-4 relative bottom-0 flex flex-row" onClick={()=> this.goBack()}>
				<div class="flex-row flex justify-center mr-6 option" onClick={()=>{}}>

				<p class = "text-white text-xl whitespace-nowrap mt-2 QuickSand mice careerOpt w-[1vh] "onClick={()=> this.goBack()} optNum="1" id="selected">BACK</p>
				</div>
				</div>
			</div>
				<Selector class=""/>

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