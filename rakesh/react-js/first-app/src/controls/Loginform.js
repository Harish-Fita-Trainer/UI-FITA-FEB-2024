import { useState } from "react"
import Int from "./input"
import './formstyle.css';
//import Button from "./button";
import { BrowserRouter as router, Route, Link, Navigate, useHistory, BrowserRouter } from 'react-router-dom';
import Homepage from "./Home";

export default function Loginpage() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();
    const [error, seterror] = useState("");

    let Login = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username, //'kminchelle'
                password: password,// '0lelplR',
                expiresInMins: 30, // optional, defaults to 60
            })
        })
            .then(res => {
                console.log("res", res);
                return res.json()
            })
            .then(res => {
                if ((!res.ok) && (username.length > 1 && password.length > 1)) {
                    console.log("sucuss");
                    history.push('/Home')

                }

                else {
                    console.log("unsuccuss");
                    seterror("Invalid Username or Password")
                }
            })


    }


    return (
        <div className="form-container">
            <div className="form-header">
                <h2>Welcome</h2>
            </div>
            <div className="form-control">
                <Int text={"user name"} value={username} onChange={(e) => { setusername(e.target.value) }} />
                <Int text={"Password Name"} type={"passsword"} value={password} onChange={(e) => { setpassword(e.target.value) }} />
                <p>{error}</p>

                <button type="button" onClick={Login}>Button</button>
            </div>
        </div>
    );
};

export const Switch = () => {
    return (
        <BrowserRouter>
            <router>
                <switch>
                    <Route exact path="/" Component={Loginpage} />
                    <Route path="/Home" Component={Homepage} />
                </switch>
            </router>
        </BrowserRouter>
    );
};



