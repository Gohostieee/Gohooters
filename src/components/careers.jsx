import {Component,useEffect} from "react"
import "../styles/cyberpunk.scss"
import "../styles/gyro.css"
import "../styles/mice.css"
import "../styles/quicksand.css"
import "../styles/glitch.scss"
import careerJson from "../pages/json/careers.json"
import $ from "jquery"



export default class Careers extends Component {
	constructor(props){
		super(props)
		this.state = {
			count:0,
			career:"h u fh"

		}
		this.selectedOption = ""
		this.options = {
			"0": 
				<>
				<div class="flex flex-row justify-center ">
						<p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>

						<p class = "text-white text-4xl QuickSand mice  careerOpt opt-1" optNum="1" onClick={()=> this.changeCareer("COLLEGE PROFESSOR")} id="selected">COLLEGE PROFESSOR </p>

					</div>
					<div class="flex flex-row justify-center ">
						<p class = "text-white text-4xl QuickSand careerOpt  opt-2" optNum="2"> DATA ENGINEER  </p>
					</div>
					<div class="flex flex-row justify-center ">
						<p class = "text-white text-4xl QuickSand careerOpt opt-3" optNum="3">  FULLSTACK DEVELOPER  </p>
					</div>
					<div class="flex flex-row justify-center ">
						<p class = "text-white text-4xl QuickSand careerOpt opt-4" optNum="4">  API DEVELOPER  </p>
					</div>
			</>
			,
			"1": 
				<>
				<div class="flex flex-row justify-center ">
					<p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>

					<p class = "text-white text-4xl QuickSand mice  careerOpt opt-1" optNum="1" id="selected">{this.state.career}	</p>

				</div>
				<p>{careerJson[this.selectedOption]}</p>

			</>
			
		}
	}


	changeCareer(career){
		this.state.career=career
		this.selectedOption="college"

		console.log(this.state.career)
		this.setState({count:1},()=>{

		})
	}
	funcfunc(){
		switch(this.state.count){
			case 0:
				return(
					<div class="m-auto border-x-2 h-[70vh] mt-12 w-[130vh] flex-col flex justify-between mt-16 mb-16">
					
					<div class="flex flex-row justify-center ">
							<p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>

							<p class = "text-white text-4xl QuickSand mice  careerOpt opt-1" optNum="1" onClick={()=> this.changeCareer("COLLEGE PROFESSOR")} id="selected">COLLEGE PROFESSOR </p>

						</div>
						<div class="flex flex-row justify-center ">
							<p class = "text-white text-4xl QuickSand careerOpt  opt-2" optNum="2" onClick={()=> this.changeCareer("DATA ENGINEER")}> DATA ENGINEER  </p>
						</div>
						<div class="flex flex-row justify-center ">
							<p class = "text-white text-4xl QuickSand careerOpt opt-3" optNum="3" onClick={()=> this.changeCareer("FULLSTACK DEVELOPER")}>  FULLSTACK DEVELOPER  </p>
						</div>
						<div class="flex flex-row justify-center ">
							<p class = "text-white text-4xl QuickSand careerOpt opt-4" optNum="4" onClick={()=> this.changeCareer("API DEVELOPER")}>  API DEVELOPER  </p>
						</div>
					</div>

				)


			break;
			case 1:
			console.log(this.selectedOption,"confusion")
				return(
					<>
				<div class="m-auto border-x-2 h-[70vh] mt-12 w-[130vh] flex-col flex mt-16 mb-16">
				
				<div class="flex flex-row justify-center mb-24 ">
					<p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>

					<p class = "text-white text-4xl QuickSand mice  careerOpt opt-1" optNum="1" id="selected">{this.state.career}	</p>

				</div>
				<p>{careerJson[this.selectedOption]}</p>

			</div>
			</>
			)


			break;

		}


	}

	componentDidMount(){// WHY IS USEEFFECT RUNNING TWICE??? IT WORKED FINE BEFORE??? LIKE HUH????
		console.log("whyyy")
		const arrowhead = `<p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>`
		let optClick;
		let optNum;
		$(".careerOpt").hover(function (){
			if($(this).attr("id")!="selected"){
				$("#arrow").remove()
				$("#selected").attr("id", "")
				$(this).attr("id","selected")
				$(this).parent().prepend(arrowhead)
				console.log("maniac",$(this).text())
			}
		})
		$(document).keydown(function(e){
		    switch (e.which){
		    case 37:    // key left, right, up, and down
		       console.log("oop")
		        break;
		    case 39:    // key right
		        console.log("oop")
		        break;
		    case 38:    // key up
		      console.log("oop")
		       	optNum = Number($("#selected").attr("optNum"))
		       	if(optNum < 2){
		       		optNum=5
		       	}
		       	$("#arrow").remove()
				$("#selected").attr("id", "")
				$(`p[optNum="${optNum-1}"]`).attr("id","selected")
				$(`p[optNum="${optNum-1}"]`).parent().prepend(arrowhead)
				console.log("maniac",`p[optNum="${optNum+1}"]`)
		        break;
		      break;
		    case 40:    // key down
		       	console.log("oop")

		       	optNum = Number($("#selected").attr("optNum"))
		       	if(optNum > 3){
		       		optNum=0
		       	}
		       	$("#arrow").remove()
				$("#selected").attr("id", "")
				$(`p[optNum="${optNum+1}"]`).attr("id","selected")
				$(`p[optNum="${optNum+1}"]`).parent().prepend(arrowhead)
				console.log("maniac",`p[optNum="${optNum+1}"]`)
		        break;
		    }
		});
	}
	
	render() {
		return (
			<>
				{this.funcfunc()}
			</>

		)
	}
}