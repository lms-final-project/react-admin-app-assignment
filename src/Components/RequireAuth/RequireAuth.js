import { Navigate } from "react-router-dom";
function RequireAuth (props){
    const auth=props.idToken;
    function isAuth(){
        
    }
    return(
        <div>
            {
                auth?props.children:<Navigate to={"/login"}/>
            }
        </div>
    );
}
export default RequireAuth;