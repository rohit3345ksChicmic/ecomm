export default function Button({className="",click=()=>{},...props}){
    return (
        <button style={{cursor: "pointer"}} className={className} onClick={(e)=>!props.params ? click(e) : click(...props.params,e)}>{props.children}</button>
    )
}