import Button from "./button";
import Input from "./input";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function Home() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            setError("Please enter username and password");
            return;
        }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 30,
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            navigate("/about");
        })
        .catch(error => {
            setError("Login failed. Please check your credentials.");
        });
    };

    return (
        <div className="form-home">
            <div className="header">
                <h1>Home</h1>
            </div>
            <div className="form-body">
                <Input
                    text={"Username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    text={"Password"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <div className="error">{error}</div>}
                <Button Text={"Login"} OnClick={handleLogin} />
            </div>
        </div>
    );
}//endz