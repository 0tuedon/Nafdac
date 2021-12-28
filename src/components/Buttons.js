/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/components/Button.css'
const Button1 = (props) => {
  return (
        <button className={`${props.class} bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-4 rounded`}>
            {props.text}
        </button>
  )
}

export default Button1
