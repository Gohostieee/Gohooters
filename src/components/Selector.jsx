import {Component} from "react"
import "../styles/gyro.css"
import $ from "jquery"



export default class Selector extends Component{

        constructor(props){
            super(props) 
            this.arrow='<p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>'
        }
        componentDidMount(){
            const arrow = this.arrow //jquery messing with the THIS keyword, going to look for a solution later
            console.log("what")
            let optList = {"currOpt":0,"optArr":[]}
            $(".option").each(function (){
                if($(this).prop("tagName")=="BUTTON"){
                    optList['optArr'].push(this)
                }else{
                
                    optList['optArr'].push($(this).parent())
                }
            })
            console.log(optList['optArr'])
            $(optList['optArr'][optList['currOpt']]).prepend($("#arrow"))






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
                console.log(arrow,"hop out")
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






        }

        render(){


            return(
                <div>
                        <p class = "text-white text-4xl QuickSand mr-4 gyro " id="arrow">➤</p>

                </div>
                )
        }




}