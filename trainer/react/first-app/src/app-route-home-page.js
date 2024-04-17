import Button from "./button";
import { React } from "react";
import { useNavigate } from "react-router-dom";

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

    return <div className="form-home">
        <div className="header">
            <h1>Home</h1>
        </div>
        <div className="form-body">
            <Button Text={"About"} OnClick={OnAboutClick}></Button>
            <Button Text={"Contact"} OnClick={OnContactClick}></Button>

        </div>
    </div>
}