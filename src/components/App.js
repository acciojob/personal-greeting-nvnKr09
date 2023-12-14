
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [text, setText] = useState("");

  return (
    <div>
        <label>Enter your name:</label>
        <input type="text" onChange={(e)=>{setText(e.target.value)}} />

        {
          text ? <p>Hello {text}!</p> : ""
        }
    </div>
  )
}

export default App
