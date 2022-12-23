import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useEffect, } from "react";
import { navStruct } from "./Utils";
import { useLocation } from "react-router-dom";
function NavBar(props) {
    let location=useLocation();
    let [navStructState,setNavStructState]=useState(navStruct);
    useEffect(()=>{
        let _navStruct=[...navStructState];
        if(location.pathname==="/login"||location.pathname==="/signup"){
            
            _navStruct=_navStruct.map((e)=>{
                if(e.name==="Profile"||e.name==="Logout" ){e.display=false;}
                else e.display=true;

                if(e.name.toLowerCase()===location.pathname.split('/')[1]){
                    e.isActive=true;
                }else e.isActive=false; 

                // console.log(e);
                return e;
            });
        }else{
            _navStruct=_navStruct.map((e)=>{
                if(e.name==="Profile"||e.name==="Logout" ){e.display=true;}
                else e.display=false;
                
                if(e.name.toLowerCase()==location.pathname.split('/')[1]){
                    e.isActive=true;
                }else e.isActive=false; 

                return e;
            });
            
        }
        setNavStructState(_navStruct)
    },[location]);
    function signOut(){
        props.setIdToken("");
        <Navigate to={"/login"}/>
    }
    return (
        <div className="navbar">
            <Link to={"/"}>
                <div className="logo ">
                    React Auth
                </div>
            </Link>
            <div className="navbuttons ">
                {navStructState.map((item, idx) => {
                    let ans=""
                    if(item.display){
                        if(item.name!=="Logout"){
                            ans =<Link key={idx} to={item.path}>
                                <button className={(`btn ${item.isActive ? "active" : ""}`)}>{item.name}</button>
                            </Link>
                        }else{
                            ans=<button key={idx} onClick={signOut} className={(`btn ${item.isActive ? "active" : ""}`)}>{item.name}</button>
                        }

                    }
                    return ans;
                })}
            </div>
        </div>

    )
}
export default NavBar;