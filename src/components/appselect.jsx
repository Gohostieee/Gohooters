

const AppSelect = (props) => {
    const parseProps = () => {
        let arr = [];
        for (let index in props.titles) {
            arr.push(<div onClick={()=>{props.functions[index]()}} className={"m-auto cursor-pointer transition-transform hover:scale-110"}><div className={"border m-auto transition-all hover:p-4 p-12"}><div className={`${props.unitHeight} flex overflow-hidden m-auto`}><img className={`${props.unitWidth} m-auto`} src={props.images[index]}/></div> </div><p className={"text-white text-center underline underline-offset-2 mt-8 font-light text-lg"}>{props.titles[index]}</p> </div>)
        }
        return arr;
    }

    return(
        <div className={"grid-cols-3 p-12 grid w-[90%] m-auto"}>
            {parseProps()}
        </div>
    )
}

export default  AppSelect;