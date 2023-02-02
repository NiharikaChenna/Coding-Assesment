import React, { useEffect, useState } from 'react'
import { shirts } from '../JSON-data/Data'
import './fashion.css'
export default function Shirts() {
  const[data,setdata] = useState([])
  useEffect(()=>{
    setdata(shirts)
  })
  return (
    <div className='main'>
        {
        data.map((val)=>{
          return (
            <div className='main'>
               <div className='cont1'>
                  <img src={val.image} style={{height:'20rem',width:'17rem'}}/>
                   <h1><span>Brand</span>:{val.Brand}</h1>
                   <h3>price:{val.price}</h3>
                   <h5>category:{val.category}</h5>
                   <p>{val.description}</p>
               </div>
            </div>
          )
        })
      }
    </div>
  )
}
