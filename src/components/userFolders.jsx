import {useState,useRef,useEffect} from 'react'
import axios from "axios"


const UserFolders = (props) => {

	const [dir,useDir] = useState("root"),[level,useLevel]=useState(0);
	const folders = useRef(null),[folderEdit,useFolder] = useState(false);
	const UpdateFolder = () =>{
		props.api.get(`/user/folders/get?owner=${props.userInfo['user']}`).then(response=>{
			if(response == []){
				return;
			}
			folders.current=response;
		})
	}
	useEffect(()=>{
		UpdateFolder();
	},[dir])
	

	const createFolder= () => {
		props.api.post(`/user/folders/get?owner=${props.userInfo['user']}`,{

		})
	}


	return (

		<div className="flex-col flex justify-center border mt-12 md:w-[80%] lg:w-[50%] w-[90%] m-auto">

			<p className="QuickSand text-base sm:text-lg text-white">Current directory: {dir}</p>
			{folderEdit ?
				<div className="flex flex-col">
					

				</div>


				:<div onClick={function UpdateFolder(){useFolder(true)}}> <button className="btn option btn-outline glitch  rounded-none mt-4 text-center text-xl font-thin layers " data-text="BACK">NEW FOLDER</button></div>
			}

		</div>

	)
}

export default UserFolders