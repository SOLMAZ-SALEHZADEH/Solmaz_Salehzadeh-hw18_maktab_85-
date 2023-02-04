import React from 'react'
import "./style.css"

function Input({placeholder,width,onChange}) {
  return (
    <input type="text" placeholder={placeholder} className={`${width}`}
    onChange={onChange}/>
  )
}

export default Input