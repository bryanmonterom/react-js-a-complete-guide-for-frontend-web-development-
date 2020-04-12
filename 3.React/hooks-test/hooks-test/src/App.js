import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>
{
  const [count, setCount] = useState(0)
  
  function countIncrease ()
  {
    setCount((prevCount)=>{return (prevCount+1)})
  }

    const countDecrease=()=>  {
      setCount((prevCount)=>{return (prevCount-1)})
    }




  return(
    <div>
      {count}
      <button onClick={countIncrease}>Increment</button>
      <button onClick={countDecrease}>Decrement</button>

    </div>
  )
}
export default App;
