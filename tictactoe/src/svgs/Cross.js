import React from 'react'

export default function Cross(props) {
    const size = props.size || 100;
  return (
    <svg width={size} height={size} viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 54L4 104L104 4L54 54ZM54 54L104 104L4 4L54 54Z" stroke="black" strokeWidth="10"/>
    </svg>
    
  )
}