export function FlashMessage(props){
    return(
        <div className={`flashmessage alert alert-${props.class}`} role="alert">
        {props.message}
        <button onClick={props.delete} >X</button>
        </div>
    )
}