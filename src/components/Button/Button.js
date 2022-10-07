import React from 'react'
import "../Button/Button.css"

function Button(props) {
  return (
    <button className='button'>{props.data}<span className='innerDiv'></span></button>
  )
}

export default Button