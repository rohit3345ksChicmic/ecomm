export default function Button(props){
    return (
        <button className={props.class} onClick={(e)=>!props.params ? props.click(e) : props.click(...props.params,e)}>{props.children}</button>
    )
}