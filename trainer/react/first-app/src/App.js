import logo from './logo.svg';
import { useRef, useState } from "react"
import './App.css';

function App() {
  const [Counter, SetCounter] = useState(0);
  var CounterValue = useRef();
  const OnClick = function () {
    SetCounter(prevvalue => prevvalue + 1);
    //CounterValue.current = CounterValue.current + 1;

    console.log(CounterValue);

  }
  console.log("CounterValue ", CounterValue.current?.innerText);

  return <div className='form-panel'>
    <div className="form-control" time={new Date().toString()} >
      <h1 ref={CounterValue} className='counter-target'> {
        Counter
      }
      </h1>
    </div>
    <div className='form-control'>
      <button onClick={OnClick}>Increment</button>
    </div>
  </div>

}

export default App;
