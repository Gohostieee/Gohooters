import {useState,useRef,useEffect} from 'react'
import axios from "axios"


const UserFolders = (props) => {

	const [parentFolder,useParent] = useState([null]),[dir,useDir] = useState("root"),[folder,useFolder]=useState([]),[level,useLevel]=useState(0),[folderEdit,useFolderEdit] = useState(false),[refresh,useRefresh]=useState();
	const folderName = useRef(),folderRefArr = useRef();
	const UpdateFolder = async () =>{
		let folders = [];
		await props.api.get(`/user/folders/get?owner=${props.userInfo['user']}&parent=${dir}`).then(response=>{
			if(response === []){
				return;
			}
			folders = response.data;

		})
		useFolder(folders)
	}
	useEffect(()=>{
		UpdateFolder();
	},[dir])

	const ChangeDir = (x,y) => {
		useParent([...parentFolder,y])
		useDir(x)
		useLevel(level+1);
		UpdateFolder();
	}
	const BackDir = () =>
	{

		useDir(parentFolder.pop());
		useParent(parentFolder)
		useLevel(level-1);
		UpdateFolder();
	}
	const createFolder= async (folderName) => {
		await props.api.post(`/user/folders/post/folder`,
			{
				name:props.userInfo['user'],
				pass:props.userInfo['pass'],
				folder:folderName,
				currLevel:level,
				parent:dir
			}).then(response =>{
			console.log(response.data,"what")
			UpdateFolder()
		})

	}
	const parseFolders=()=>{
		let folderArr = [];
		if(dir!=null){
			folderArr = [<div ref = {folderRefArr} onClick={()=>{BackDir()}} className="flex flex-row"> <p className="QuickSand text-base sm:text-lg text-white mr-4">► </p> <p className="QuickSand text-base sm:text-lg text-white underline underline-offset-4"> BACK</p>  </div>]
		}
		folder.forEach((x)=>{
				if(x['level']===level)
				{
					console.log(x['level'])
					folderArr.push(<div ref = {folderRefArr} onClick={()=>{ChangeDir(x['name'],dir)}} className="flex flex-row"> <p className="QuickSand text-base sm:text-lg text-white mr-4">► </p> <p className="QuickSand text-base sm:text-lg text-white underline underline-offset-4"> {x['name']}</p>  </div>)
				}
		})
		return folderArr;
	}

	return (

		<div className="flex-col flex justify-center border mt-12 md:w-[80%] lg:w-[50%] w-[90%] m-auto">

			<p className="QuickSand text-base sm:text-lg text-white text-center">Current directory: {dir}</p>
			{folderEdit ?
				<div className="flex flex-col">

					<input type="text" ref = {folderName} class=" text-white mb-8 QuickSand md:w-[50%] lg:w-[30%] w-[90%] m-auto text-center bg-transparent border-b border-white " />
					<div className = "flex flex-row m-auto">

						<div onClick={function UpdateFolder(){useFolderEdit(false)}}> <button className="btn mr-4 option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">CANCEL</button></div>
						<div onClick={function UpdateFolder(){createFolder(folderName.current.value);useFolderEdit(false)}}> <button className="btn ml-4 option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">SAVE</button></div>


					</div>

				</div>


				:<div className={"m-auto"} onClick={function UpdateFolder(){useFolderEdit(true)}}> <button className="btn option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">NEW FOLDER</button></div>
			}

			{folder!=[]&&<div className="grid grid-cols-3 justify-center p-8">{parseFolders()}</div>}
		</div>

	)
}

export default UserFolders