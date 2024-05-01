import { useState} from "react";
import Button from "./button";
import { Increment, IncrementExplicit } from "./action";
import { SelectCartCount } from "./selector"
import store from "./store"
import { Provider, useDispatch, useSelector } from 'react-redux'


export function AppStoreRedux() {
    return <Provider store={store}>
        <App />
    </Provider>
}


function App() {
    const[value,setvalue]=useState("");

    const Count = useSelector(SelectCartCount);
    const dispatch = useDispatch();
    console.log("Count", Count)
    const OnIncrement = function () {
        dispatch(Increment())
    }

    const OnIncrementExplicit = function () {
         if(value !==""){
        dispatch(IncrementExplicit(value))
         }
        console.log("hi",value)
    }
    const change=(e) => {setvalue(e.target.value)}
    return <>
       <div className="header"> <div className="head">Welcome to redux App </div> <div className="cartvalue">{Count}</div></div>
         <input type="number" value={value} onChange={change}/>
        <Button Text={"Increment"} OnClick={OnIncrement}></Button>
        <Button Text={"Increment Explicit"} OnClick={OnIncrementExplicit}></Button>

    </>
}