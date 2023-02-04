import React,{useState} from 'react'
import "./AdjustColor.css"

function AdjustColor() {
    const [red, setRed] = useState(Math.floor(Math.random() * (225 - 0 + 1)) + 0)
    const [blue, setBlue] = useState(Math.floor(Math.random() * (225 - 0 + 1)) + 0)
    const [green, setGreen] = useState(Math.floor(Math.random() * (225 - 0 + 1)) + 0)
    const color = `rgb(${red},${green},${blue})`;
    console.log(color)
    const IcreaseRed=()=>{
        setRed(Math.floor(Math.random() * (225 - red + 1)) + red)
        console.log(color)
    }
    const DecreaseRed=()=>{
        setRed(Math.floor(Math.random() * (red - 0 + 1)) + 0)
        console.log(color)
    }
    const IcreaseGreen=()=>{
        setGreen(Math.floor(Math.random() * (225 - green + 1)) + green)
        console.log(color)
    }
    const DecreaseGreen=()=>{
        setGreen(Math.floor(Math.random() * (green - 0 + 1)) + 0)
        console.log(color)
    }
    const IcreaseBlue=()=>{
        setBlue(Math.floor(Math.random() * (225 - blue + 1)) + blue)
        console.log(color)
    }
    const DecreaseBlue=()=>{
        setBlue(Math.floor(Math.random() * (blue - 0 + 1)) + 0)
        console.log(color)
    }
  return (
    <div className="AdjustColorConttainer">
       <p className="title">question2</p> 
        <div>
            <p>Red</p>
            <button onClick={IcreaseRed}>Icrease Red</button>
            <button onClick={DecreaseRed}>Decrease Red</button>
        </div>
        <div>
            <p>Green</p>
            <button onClick={IcreaseGreen}>Icrease Green</button>
            <button onClick={DecreaseGreen}>Decrease Green</button>
        </div>
        <div>
            <p>Blue</p>
            <button onClick={IcreaseBlue}>Icrease Blue</button>
            <button onClick={DecreaseBlue}>Decrease Blue</button>
        </div>
        <div 
        style={{ background: `${color}`}}
        className="divColor"
        >

        </div>
    </div>
  )
}

export default AdjustColor