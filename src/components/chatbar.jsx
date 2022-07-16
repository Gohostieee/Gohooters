import {useRef} from 'react';

const ChatBar = (props) => {
	let currMessage = useRef();
	let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
	let userInfo = JSON.parse(localStorage.getItem('user'));


	const SendMessage = (e,messages)=>{
		if (e.key==="Enter" && currMessage.current.value.length != 0) {
			props.socket.emit("sendMsg",{"msg":currMessage.current.value,'user':userInfo['user'],"date":date},props.room)
			currMessage.current.value = "";
		}
	}

	return (
		<div class="sm:w-[100%]  black h-[5%] flex flex-auto justify-between">
			<input type="text" placeholder="Type here" ref={currMessage} onKeyPress={(e,messages,socket)=>{SendMessage(e,socket)}} class="whitespace-normal break-all text-2xl font-thin h-[100%] ml-4 sm:w-[530px] lg:w-[85%] bg-black border-r border-white " />
		</div>
		)

}


export default ChatBar