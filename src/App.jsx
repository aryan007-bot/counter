import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      console.log("please stop");
    }
  };
  const removeValue = () =>{
    if(count>0){
      setCount(count-1);
    }else{
      console.log("please stop")
    }
  }

  return (
    <>
      <h1>Aryan Aur React🚀</h1>
      <h2>Counter value✅: {count}</h2>
      <button onClick={addValue}>Add value➕</button>
      <br />
      <button onClick={removeValue}>remove value➖</button>
    </>
  );
}

export default App;
