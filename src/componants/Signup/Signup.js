import { useState } from "react";

import { signupFetch } from "../../utils/fetch";

import "./Signup.css"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test succesful");
        signupFetch(username, email, password);
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-inner-container">
                <h3 className='signupTitle'>Sign Up</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    
                    <input
                        className="signup-input"
                        placeholder="Username"
                        onChange={(e) => changeHandler(e,setUsername, username)}
                    />
                    
                    <input
                        className='signupInput'
                        placeholder="Email"
                        onChange={(e) => changeHandler(e, setEmail, email)}
                    />
                    <input
                        className="signup-input"
                        placeholder="Password"
                        onChange={(e) => changeHandler(e, setPassword, password)}
                    />
                    <button type="submit">Sign Up</button>
                </form>

            </div>

        </div>
    )
}

export default Signup;