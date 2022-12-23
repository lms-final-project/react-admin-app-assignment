import { Navigate } from "react-router-dom";
function Guest (props){
    const auth=props.idToken;
    return(
        <div>
            {
                !auth?props.children:<Navigate to={"/"}/>
            }
        </div>
    );
}
export default Guest;