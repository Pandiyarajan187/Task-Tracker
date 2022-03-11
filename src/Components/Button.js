import React from 'react'

const Button = ({text,color,onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:"green"}} className='btn'>
        {text}
    </button>
  )
}

export default Button