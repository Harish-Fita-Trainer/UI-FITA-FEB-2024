import React, { useState } from "react";
import Lab from "./label-c";
import Get from "./input";
import Button from "./button";
export default function Login(){

    const [name, setname] = useState('');
    const [dob, setdob] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [age, setage] = useState('');
    const [password, setpassword] = useState('');
  
    const onsave = (e) => {
        e.preventDefault();
        console.log({name,dob,phonenumber,age,password});
      };
    
    return<> <div>
        <form>
    <div> <Lab id="name" text={"entername"}/>
    <Get type={"text"} onChange={(e) => { setname(e.target.value) }} id="name"/></div>
    <div> <Lab id="dop"text={"enterdob"} onChange={(e) => { setname(e.target.value)}}/>
    <Get type={"date"} onChange={(e) => { setdob(e.target.value)}}id="dop"/></div>
    <div> <Lab  id="phno" text={"enterphoneno"}/>
    <Get type={"text"} onChange={(e) => { setphonenumber(e.target.value)}} id="phno"/></div>
    <div> <Lab id="age" text={"enterage"}/>
    <Get type={"date"} onChange={(e) => { setage(e.target.value)}} id="age" /></div>
    <div>
       <Lab id="m" text={"Male"}/> 
      <Get type={"radio"}  id="m" name="ee" />
      <Lab id="f" text={"female"}/> 
      <Get type={"radio"}  id="f" name="ee" />
    </div>
    <div>
    <Lab id="pwd" text={"enter pasword"}/>
    <Get type="password" onChange={(e) => { setpassword(e.target.value)}}id="pwd" /></div> 
    <div>
    <Lab id="pwd" text={"Select DEPARTMent"}/>
    <select>
        <option value> Select Department</option>
        <option value="it">IT</option>
        <option value="cse">Cse</option>
        <option value="ece">ece</option>
    </select >
    </div> 
    </form>
    </div>
    <div>
        <Button Text="save" OnClick={onsave}/>
    </div>
    </>   
    
}