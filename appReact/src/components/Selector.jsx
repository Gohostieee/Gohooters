import "../styles/gyro.css"
import $ from "jquery"
import {Component} from "react"



export default class Selector extends Component{

        constructor(props){
            super(props) 
            this.arrow='<p class = "text-white text-4xl relative bottom-[5px] QuickSand mr-4 gyro " id="arrow">➤</p>'
        }
        componentDidMount(){
            const arrow = this.arrow //jquery messing with the THIS keyword, going to look for a solution later
            console.log("what")
            let optList = {"currOpt":0,"optArr":[]}
            $(".option").each(function (){
                                
                    optList['optArr'].push($(this))
                
                $(this).hover(function(){
                    $("#arrow").remove()
                    $(this).prepend(arrow)
                })
            })
            console.log(optList['optArr'])
            $(optList['optArr'][optList['currOpt']]).prepend($("#arrow"))




            setTimeout(function (){
$(document).keydown(function(e){

                console.log(e.which)
            switch (e.which){
            case 13:

                 $(optList['optArr'][optList['currOpt']]).trigger("click")
                 console.log("whtff!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",$(optList['optArr'][optList['currOpt']]))
                break;
            case 37:    // key left, right, up, and down
               console.log("oop")
                break;
            case 39:    // key right
                console.log("oop")
                break;
            case 38:    // key up
                console.log("oop" , optList['currOpt'])

                if(optList['currOpt']<=0){
                    optList['currOpt']=optList['optArr'].length-1

                }else {
                    optList['currOpt']-=1

                }
                $("#arrow").remove()
                $(optList['optArr'][optList['currOpt']]).prepend(arrow)

                
                break;
            case 40:    // key down
                console.log("oop" , optList['currOpt'])

                if(optList['currOpt']+1>optList['optArr'].length-1){
                    optList['currOpt']=0
                }else {
                    optList['currOpt']+=1

                }
                $("#arrow").remove()
                console.log(arrow,"hop out")
                $(optList['optArr'][optList['currOpt']]).prepend(arrow)

               
                break;
            }
        });
},50)

            






        }

        render(){


            return(
                <div>
                        <p class = "text-white text-4xl mb-4 QuickSand mr-4 gyro " id="arrow">➤</p>

                </div>
                )
        }




}