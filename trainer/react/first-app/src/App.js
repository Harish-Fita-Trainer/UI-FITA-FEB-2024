import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function App() {
  const [Value, SetValue] = useState("");
  const OnChange = function (e){
    SetValue(e.target.value);
    console.log("onchange0",e.target.value)
  }
  return  <div className="form-control" time={new Date().toString()} >
    <label htmlFor="first_name">First Name</label>
    <input type="text" id="first_name" value={Value} onChange={OnChange}/>
   </div>
  
}

export default App;
