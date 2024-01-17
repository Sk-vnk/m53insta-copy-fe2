import { useState } from "react";

import { loginFetch } from "../../utils/fetch";

import './Login.css'

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
        console.log(state);
};

            const handleSubmit = async (e) => {
                e.prevetDefault();

            const data = await loginFetch(username, password);
                console.log(data);
                await setLoggedIn(data);
                console.log()
            };  

    return (

        <form onSubmit={(e) => handleSubmit(e)} className="login-box">
            <h3 className="login-title">Log In</h3>
        <input
             className="login-input"
             placeHolder="Username"
             onChange={(e) => changeHandler(e, setUsername, username)}
             />
             <input
             className="login-input"
             placeholder="Password"
             onChange={(e) => changeHandler(e, setPassword, password)}
             />
             <button type="submit">Login</button>
        </form>
    )};

export default Login;