import {useEffect,useState} from 'react'
const Err =(props)=>{
	const [error,useError] = useState();
	useEffect(function ChangeError(){
		useError(props.error)
	},[props.error])

	return(
		<p className={'text-red-500 underline underline-offset-4 QuickSand '+props.classes}>{props.error}</p>

	)
}

export default Err;