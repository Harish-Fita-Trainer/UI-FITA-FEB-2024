import logo from './logo.svg';
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import './App.css';
import AppUseEffect from './app-use-effect';
import Button from './button';

function AppUseMemo() {
  const [Counter, SetCounter] = useState(0);
  const [Counter2, SetCounter2] = useState(0);

  var CounterValue = useRef();
  const OnClick = function () {
    SetCounter(prevvalue => prevvalue + 1);
    //CounterValue.current = CounterValue.current + 1;


  }

  const OnClick2 = function () {
    SetCounter2(prevvalue => prevvalue + 1);
    //CounterValue.current = CounterValue.current + 1;


  }

  const OnPrint = useCallback(function () {
    console.log("Counter,Counter2", Counter, Counter2);
  }, [Counter, Counter2]);

  useEffect(() => {
    console.log("inside useeffect", Counter);


  }, [Counter]);

  const Grid = useMemo(() => {
    return <AppUseEffect></AppUseEffect>
  }, [Counter2]);

  return <div className='form-panel'>
    <div className="form-control" time={new Date().toString()} >
      <h1 ref={CounterValue} className='counter-target'> Counter 1 {
        Counter
      }
      </h1>
      <h1 ref={CounterValue} className='counter-target'> Counter 2 {
        Counter2
      }
      </h1>
    </div>
    <Button OnClick={OnClick} Text='Increment Counter 1' ClassName='form-control'></Button>
    <Button OnClick={OnClick2} Text='Increment Counter 2' ClassName='form-control'></Button>
    <Button OnClick={OnPrint} Text='Print Counter' ClassName='form-control'></Button>

    {Grid}
  </div>

}

export default AppUseMemo;
