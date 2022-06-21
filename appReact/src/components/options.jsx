import React,{useState,useEffect} from "react";
import Selector from "./Selector.jsx"
import {Link} from "react-router-dom"
/*





techo is greater than itself
floor is lower than itself
whole numbers stay the same

mcd keep dividing each other with module

mcm multiply both and divide by the mcd 

definition of congruencia

if A - B is divisible by M then they are congruent and 
its symbolised as A === B (mod M)
38==={5,2,8,-2,-5,-8} mod(3)

aight now look at this

9 mod 7 = 2
16 mod 7 = 2
23 mod 7 = 2

they all belong to the 2 class

so they all congruent with two A - B

*/

 const Options=(props)=>{

 	const [view, setViewState] = useState();
 	useEffect(()=>{
 		setViewState(0)
 		
 	},[])
 	const render = ()=>{
 		let uwu = [];
 		console.log(typeof view)
 		console.log(view)
 		
		if(view | view===0){
			if(!view){

				for(let x = 0; x < props.options.length;x++){
 					uwu.push(
						<div class="flex flex-row justify-center mb-10 option ">

			 				<p onClick={()=>{setViewState(x+1)}}class="text-white text-3xl QuickSand mice careerOpt opt-1">{props.options[x][0]}</p>
						</div>
					)

 				}
				return (

				<div class="m-auto border-x-2 h-[70%] mt-12 w-[80%] flex-col flex justify-evenly mt-4 mb-12 overflow-y-visible">
					{uwu}
					<div class="flex flex-row justify-center mb-10 option ">

	 						<p onClick={()=>{props.exit()}}class="text-white text-3xl QuickSand mice  careerOpt opt-1">BACK</p>
	 				</div>
					<Selector/>

				</div>
					)};
			return (
				<div class="m-auto  h-[85%]  lg:w-[80%] sm:w-[100%] flex-col flex mt-2 overflow-y-visible">

					<div class="flex flex-row justify-center mb-2 ">

						<p class = "text-white lg:text-3xl text-2xl  QuickSand mice careerOpt opt-1" optNum="1" id="selected">{props.options[parseInt(view)-1][0]}	</p>
					
					</div>
						<p class = "text-white lg:text-xl text-l lg:ml-[8vh] lg:mr-[8vh] md:ml-[10vh] md:mr-[10vh] lg:pl-8 lg:pr-8 lg:pb-4 ml-2 mr-2 text-center lg:border-x  QuickSand" optNum="1" id="selected">{props.options[parseInt(view)-1][1]}	</p>
		      		<div>
		      		<button onClick={()=>{props.options[parseInt(view)-1][2][3](setViewState)}} class="btn mt-8 mr-4 ml-4 lg:mt-4 option btn-outline btn-primary glitch text-xl font-thin layers " data-text="Enter">{props.options[parseInt(view)-1][2][2]}</button>
		      		<button onClick={()=>{props.options[parseInt(view)-1][2][1]()}}class="btn mt-8 mr-4 ml-4 lg:mt-0 option btn-outline btn-primary glitch text-xl font-thin layers " data-text="Enter">{props.options[parseInt(view)-1][2][0]}</button>
		      		</div>
					</div>
					);
		}
 		console.log("nani")
 	}


	return (<>
					
					{render()}

					</>
				)
}
export default Options;