import '../css/login.css'
import React from "react";

function Login(){
    return(
        <div className="login">
            <div className="left-side">
h
            </div>
            <div className="right-side">
                    <h1>Welcome Back</h1>
                    <h5>Manage Your Hotel Easily</h5>
                <div className="control">
                    <label>Username</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email Address"></input>
                </div>

                <div className="control">
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Email Password"></input>
                </div>
                <button className="button">Login</button>
            </div>
        </div>
    )
}
 export default Login