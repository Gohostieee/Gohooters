import {_2bChristMas,haruhiAndKyon,wiredIcon,lainPC,lainOnChair} from "../img/imgindex"
import {AppSelect} from "../components/compindex"

const Mainpage = (props) => {
    const debugFunc = (x) => {console.log(x)}
    const menu =
        {
            images:[wiredIcon,lainPC,haruhiAndKyon],
            titles:["My Profile","Search","Network"],
            functions:[()=>{props.state("login")},()=>{props.state("search")},()=>{props.state("network")}]
        }
    return (
    <div>
        <p className={"text-white font-thin text-6xl text-center mt-[5%] "}>MainMenu</p>
        <AppSelect functions = {menu.functions} unitWidth={"w-[250px]"} unitHeight={"h-[250px]"} images={menu.images} titles={menu.titles}/>
    </div>
    )
}
export default Mainpage;