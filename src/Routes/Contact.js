import React from 'react'
import './fashion.css'
export default function Contact() {
  return (
    <div className='form'>
      <h1 className='mid'>CONTACT US</h1>
      <input className='user' type="text" placeholder='enter your name'/>
      <input className='user' type="text" placeholder='enter your email'/>
      <input className='user' type="number" placeholder='enter your number'/>
      <button className='btn'>send</button>
    </div>
  )
}
