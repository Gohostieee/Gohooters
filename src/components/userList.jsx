
import {useEffect,useRef,useState} from "react";
import axios from "axios"


const UserEntry = (props) => {
	const api = axios.create({baseURL:"http://localhost:3005/users/pfp"})

	const [currPFP, usePFP] = useState();
	

	useEffect( ()=>{
		async function UpdateUsr  (){
			await api.get(`/?user=${props.x['name']}`).then(function SetImg(url){
				usePFP(url['data']);
			})	
		}
		UpdateUsr()
		
	},[])
	
	return(
			<>
				{ props.x['name'] && 
				<div className="flex flex-row hover:bg-gray-500" onClick={()=>{props.onClick(props.x['name'],props.x['about'])}}>
						{	<div className="m-0 w-[100px] overflow-y-hidden min-h-[50px] max-h-[80px] border-b border-r">
								{currPFP &&<img className="" src={currPFP}/>}
							</div>
						}
						<div className="flexflex-col border-b w-[100%] max-h-[80px] overflow-y-auto overflow-x-hidden">

							<div className="border-b">{<p className="text-left ml-4 font-bold text-lg text-white QuickSand">{props.x['name']}</p>}</div>
							{props.x['about'] 
							? <p className=" text-left ml-4 mb-4 mt-2 text-white break-words QuickSand">{props.x['about']}</p>
							: <p className=" text-left ml-4 mb-4 mt-2 text-white break-words QuickSand">this guy has no about me!</p>
							}
						</div>
				</div>
					}
			</>

		)
}

export default UserEntry;