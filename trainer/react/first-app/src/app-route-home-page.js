import Button from "./button";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./controls/input";

export function Home() {
    const navigate = useNavigate();
    const OnContactClick = () => {
        console.log("contact click");
        navigate("/contact")
    }

    const OnAboutClick = () => {
        console.log("About click");
        navigate("/about")

    }

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");


    const Login = () => {
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
            .then(console.log);
    }

    const OnSuccessLogin = () => {
        navigate("/about")
    }

    return <div className="form-home">
        <div className="header">
            <h1>Home</h1>
        </div>
        <div className="form-body">
            <Input text={"user Name"} value={username} onChange={(e) => { setusername(e.target.value) }}></Input>
            <Input text={"PAssword Name"} type={"passsword"} value={password} onChange={(e) => { setpassword(e.target.value) }}></Input>

            <Button Text={"Login"} OnClick={Login}></Button>

        </div>
    </div>
}