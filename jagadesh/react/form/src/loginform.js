import Input from "./input";
import Button from "./button";
import { useEffect, useState } from "react";
export default function Loginpage() {

const [name,setname]=useState('');
const [password,setpassword]=useState('');

const onChange= (e) => {

    setname(e.target.value)
}
const submit = () => {
    console.log(name,password)
    console.log("passwaord",password)
  }

useEffect



return <div>
         <Input type={"text"} onChange={onChange} id={"name"} label="Username" forname="name" />
         <Input type={"password"} onChange={onChange} id={"name"} label="password" forname="name" />
            <Button OnClick={submit}  Text={"save"}/>
</div>
}