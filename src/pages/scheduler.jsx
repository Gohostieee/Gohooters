import monthsJson from "../json/months.json";
import hoursJson from "../json/hours.json";
import {useRef,useState,useEffect} from "react";
import axios from "axios";
const dbUrl = "http://localhost:3001/"
const Scheduler = () => {
    const [takenDates,useTakenDates] = useState(),[refresh,useRefresh] = useState();
    const SetTakenDates = (x) =>
    {
        useTakenDates(x)
    }
    const GetTakenTime = (x) => {
        axios({
            method:"get",
            url:`${dbUrl}get/calls?day=${x}`

        }).then(x => {SetTakenDates(x)})
    }
    useEffect(()=>{
        GetTakenTime(11)
        
    },[])
    useEffect(()=>{
        console.log(takenDates)
        for (let takenDatesKey in takenDates) {
           console.log(takenDates[takenDatesKey].data(),"whywhy")
        }

    },[takenDates])

    let d = new Date();
    const [pick,usePick] = useState("date"), [dateFormat, useDateFormat] = useState("standard");
    const currMonth = d.getMonth();
    const currDay = d.getDate();
    console.log(currDay,"uwu")
    const selectDate = useRef({day: 0, time:0}), contacts = {email:useRef(), website:useRef(), phoneNumber:useRef()};
    const SetRefArr = (arr,index) =>{
        arr[index]= useRef(index);
    }
    let refArr = [];
    const GetDays = (month,refArr)=>{
        let arr = []
        for(let x = 1; x <= monthsJson[currMonth].days;x++)
        {

            if(x<=currDay)
            {
                arr.push(<p className={"text-gray-700 border-b p-2 text-center duration-300 text-lg font-black"}>{x}</p>)
            }
            else
            {
                console.log(x,currDay)
                SetRefArr(refArr,x);
                arr.push(<button onClick={()=>{SetDate("hour",x)}}  className={"text-white border-b p-2  text-center hover:bg-white hover:text-black delay-75 duration-300 text-lg font-black"}>{x}</button>)
            }
        }
        return arr;
    }
    const SetDate = (mode,index) => {
        usePick(mode)
        selectDate.current.day = index;
    }
    const SetTime = (mode,index) => {
        usePick(mode)
        selectDate.current.time = index;
        console.log(selectDate)
    }
    const GetHours = (mode) => {
        let arr = [];
        switch (mode){
            case "military":
                for (let index in hoursJson) {
                    arr.push(<ul onClick={()=>{SetTime("submit",index)}} className={"text-white text-4xl font-thin m-4 hover:bg-white transition-all hover:text-black border"}><button>{hoursJson[index]['military_format']}</button></ul>)
                }
                break;
            case "24h":
                for (let index in hoursJson) {
                    arr.push(<ul onClick={()=>{SetTime("submit",index)}} className={"text-white text-4xl font-thin m-4 hover:bg-white transition-all hover:text-black border"}><button>{hoursJson[index]['twenty_four_hour_format']}</button></ul>)
                }
                break;
            case "standard":
                for (let index in hoursJson) {
                    arr.push(<ul onClick={()=>{SetTime("submit",index)}} className={"text-white text-4xl font-thin m-4 hover:bg-white transition-all hover:text-black border"}><button>{hoursJson[index]['standard_format']}{hoursJson[index]['time_of_day']}</button></ul>)
                }
                    break;
        }
        return arr;
    }
    const ChangeFormat = (index) => {
        useDateFormat(index);
    }
    const trimIllegalChars = () => {
        contacts.website.current.value = contacts.website.current.value.replace(/[\s!#<>()*&^%$#@+_?]/g, '')
        contacts.phoneNumber.current.value = contacts.phoneNumber.current.value.replace(/[\s!#<>()*&^%$#@+_?]/g, '')
        contacts.email.current.value = contacts.email.current.value.replace(/[\s]/g, '')

    }
    const submitData = () => {
        axios({
            method: "post",
            url: `${dbUrl}user/post/call`,
            data: {
                username: "gohost",
                time: selectDate.current.time,
                day: selectDate.current.day,
                email: contacts.email.current.value,
                website: contacts.website.current.value,
                phoneNumber: contacts.phoneNumber.current.value
            }
        })
    }
    return (
        <div>
            <h1 className={"text-white mt-[2%] m-auto text-4xl text-center font-light"}>Schedule a call</h1>
            <div className="bg-black  border-x-2 mr-[25%] flex justify-center flex-nowrap ml-[25%] overflow-hidden mt-[3%] absolute w-[50%] h-[80%]">
                <div>

                </div>


                <div className={`flex flex-col justify-evenly absolute align-middle h-full transition-all duration-700 ${pick === "date"?  "ml-[0%]":"ml-[250%]"}`}>
                    <div className={``}>
                        <h1 className={"text-white m-auto text-4xl text-center font-light"}>Pick a date</h1>
                        <div className={"w-[300px] h-[305px] select-none  border m-auto mt-6 flex flex-col"}>
                            <div className={"border-b h-[40px]"}>
                                <p className={"text-white text-center mt-2 "}>{monthsJson[currMonth].name}</p>
                            </div>
                            <div className={"grid grid-cols-6"}>
                                {GetDays(currMonth,refArr)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col justify-start align-middle transition-all duration-700 ${pick === "hour"?  "ml-[0%]":"ml-[250%]"}`}>

                        <h1 className={"text-white m-auto text-4xl text-center font-light"}>Pick a date</h1>
                        <div className={"flex justify-center mt-4"}>
                            <button onClick={()=>{ChangeFormat("military")}} className={"text-white ml-2 mr-2 font-light border text-center text-lg p-1 pl-2 pr-2 hover:bg-white hover:text-black"}>Military format</button>
                            <button onClick={()=>{ChangeFormat("24h")}}  className={"text-white ml-2 mr-2 font-light border text-center text-lg p-1 pl-2 pr-2 hover:bg-white hover:text-black"}>24h format</button>
                            <button onClick={()=>{ChangeFormat("standard")}}  className={"text-white ml-2 mr-2 font-light border text-center text-lg p-1 pl-2 pr-2 hover:bg-white hover:text-black"}>Standard format</button>

                        </div>
                        <ul className={"w-[300px] h-[305px] select-none  border-y  m-auto mt-6 overflow-auto text-center flex flex-col"}>
                            {GetHours(dateFormat)}
                        </ul>

                    <button onClick={()=>{SetDate("date",0)}}  className={"text-white m-auto font-light border text-center text-lg p-1 pl-2 pr-2 hover:bg-white hover:text-black"}>Back</button>

                </div>


            </div>
                <div className={`${pick !== "submit" ? "opacity-0 z-[-10]" : "z-20"} flex  flex-col justify-start align-middle bg-black h-full top-0 bg-opacity-90 absolute w-full transition-all duration-700 ${pick === "contact"?  "ml-0":""}`}>

                    <h1 className={"text-white m-auto text-4xl text-center mt-[16%] mb-0 font-light"}>Enter contact details</h1>
                    <p className={"text-white text-lg font-thin mt-[1%] text-center"}>Date selected</p>
                    <p className={"text-white text-lg font-thin text-center"}>{monthsJson[currMonth].name} {selectDate.current.day} || {hoursJson[selectDate.current.time]["standard_format"]}{hoursJson[selectDate.current.time]["time_of_day"]}</p>

                    <p className={"text-white text-lg font-thin mt-[2%] text-center"}>Email* required</p>
                    <input ref = {contacts['email']} type={"email"} className={"text-white caret-white border m-auto mt-0 font-thin text-2xl mb-0 lg:w-[25%] bg-black rounded-0"} placeholder={"Enter email"}/>
                    <p className={"text-white text-lg font-thin mt-[2%] text-center"}>Phone number</p>
                    <input ref = {contacts['phoneNumber']} type={"number"} className={"text-white caret-white border m-auto mt-0 font-thin text-2xl mb-0 lg:w-[25%] bg-black rounded-0"} placeholder={"Enter number"}/>
                    <p className={"text-white text-lg font-thin mt-[2%] text-center"}>Website</p>
                    <input onChange={()=>{trimIllegalChars()}} ref = {contacts['website']} type={"url"} className={"text-white caret-white border m-auto mt-0 font-thin text-2xl mb-0 lg:w-[25%] bg-black rounded-0"} placeholder={"Enter url"}/>
                    <div className={"flex justify-center m-auto mt-12"}>
                        <button onClick={()=>{SetTime("hour",0)}} className={"text-white border bg-black hover:text-black hover:bg-white font-thin text-2xl pl-6 pr-6 pt-2 pb-2 ml-2 mr-2"}>BACK</button>
                        <button onClick={()=>{submitData()}} className={"text-white border bg-black hover:text-black hover:bg-white font-thin text-2xl pl-6 pr-6 pt-2 pb-2 ml-2 mr-2"}>SUBMIT</button>

                    </div>
                </div>
        </div>

    );
}

export default Scheduler;