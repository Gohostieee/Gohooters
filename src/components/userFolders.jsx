import {useState,useRef,useEffect} from 'react'
import axios from "axios"


const UserFolders = (props) => {

	const [dir,useDir] = useState("root"),[folder,useFolder]=useState([]),[level,useLevel]=useState(0),[folderEdit,useFolderEdit] = useState(false),[refresh,useRefresh]=useState();
	const folderName = useRef(),parent = useRef();
	const UpdateFolder = async () =>{
		let folders = [];
		await props.api.get(`/user/folders/get?owner=${props.userInfo['user']}&parent=${dir}`).then(response=>{
			if(response == []){
				return;
			}
			folders = response.data;
			console.log(folders,"uwfu")

		})
		console.log(folders,"uwu")
		useFolder(folders)
	}
	useEffect(()=>{
		UpdateFolder();
	},[dir])
	

	const createFolder= async (folderName) => {
		await props.api.post(`/user/folders/post/folder`,
		{
			name:props.userInfo['user'],
			pass:props.userInfo['pass'],
			folder:folderName,
			currLevel:level+1,
			parent:dir
		}).then(response =>{
			console.log(response)
			UpdateFolder()
		})

	}
	const parseFolders=()=>{
		let folderArr=[]
		folderArr.push(folderArr.push(<div onClick={function ChangeDir(){useDir(parent.current)}} className="flex flex-row ml-2 mr-2 "> <p className="QuickSand text-base sm:text-lg text-white mr-1">► </p> <p className="QuickSand text-base sm:text-lg text-white underline underline-offset-4">BACK</p></div>))
		folder.forEach((x)=>{
			if(x['parent']==dir){
				folderArr.push(<div  className="flex flex-row ml-2 mr-2 "> <p className="QuickSand text-base sm:text-lg text-white mr-1">► </p> <p onClick={function ChangeDir(){useDir(x['name'])}} className="QuickSand text-base sm:text-lg text-white underline underline-offset-4"> {x['name']}</p> <p className="QuickSand text-base sm:text-lg text-white font-black ml-2 mt-[2px] ">  X</p> </div>)
			}
		})
		return folderArr;
	}

	return (

		<div className="flex-col flex justify-center border mt-12 md:w-[80%] lg:w-[50%] w-[90%] m-auto">

			<p className="QuickSand text-base sm:text-lg text-white">Current directory: {dir}</p>
			{folderEdit ?
				<div className="flex flex-col">
					
					<input type="text" ref = {folderName} class=" text-white mb-8 QuickSand md:w-[50%] lg:w-[30%] w-[90%] m-auto text-center bg-transparent border-b border-white " />
					<div className = "flex flex-row m-auto">

						<div onClick={function UpdateFolder(){useFolderEdit(false)}}> <button className="btn mr-4 option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">CANCEL</button></div>
						<div onClick={function UpdateFolder(){createFolder(folderName.current.value)}}> <button className="btn ml-4 option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">SAVE</button></div>


					</div>

				</div>


				:<div onClick={function UpdateFolder(){useFolderEdit(true)}}> <button className="btn option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">NEW FOLDER</button></div>
			}

				{folder!=[]&&<div className="flex flex-row flex-wrap justify-center p-8 ">{parseFolders()}{console.log(folder,"what the fuck")}</div>}
		</div>

	)
}

export default UserFolders