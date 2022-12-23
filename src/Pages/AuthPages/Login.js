import React, { useState } from "react";
import { FlashMessage } from "./FlashMessage";
import { LoginFun } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
function Login(props) {
    let navigate=useNavigate();
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [error, setError] = useState("");
    let [isError, setIsError] = useState(0);
    function setIserrorFalse() {
        setIsError(0);
    }
    function onPasswordChange(e) {
        setPassword(e.target.value);
    }
    function onEmailChange(e) {
        setEmail(e.target.value);
    }
    function onFormSubmited(e) {
        e.preventDefault();
        LoginFun(email, password).then(response => {
            if (response.ok === 200) {
                let idToken = response.response.idToken;
                props.setIdToken(idToken, email)
                setError("");
                setIsError(false)
                navigate("/")

            } else {
                setError(response.response.error.message);
                setIsError(true)
            }
        });
    }

    return (
        <div>
            <br />
            {isError ? <FlashMessage class="danger" message={error} delete={setIserrorFalse} /> : ""}
            <div className="authCard">
                <div className="title">Login</div>
                <form onSubmit={onFormSubmited}>
                    <label htmlFor="email">Your email</label>
                    <input onChange={onEmailChange} value={email} id="email" />
                    <label htmlFor="password">Your Password</label>
                    <input onChange={onPasswordChange} type="password" value={password} id="password" />
                    <button className="btn">Login</button>
                    <Link to={"/signup"}>
                        <div >Create new account</div>
                    </Link>
                </form>
            </div>
        </div>

    )
}

export default Login;