import React, { useEffect, useState } from 'react'
import { sarees } from '../JSON-data/Data'


import './fashion.css'

export default function Sarees() {
  const [data, setdata] = useState([])
  useEffect(()=>{
      setdata(sarees)
  },[])
  return (
    <div className='main'>
      {
        data.map((val)=>{
          return (
            <div className='main'>
               <div className='cont1'>
                  <img src={val.image} style={{height:'20rem',width:'17rem'}}/>
                   <h3><span>Brand</span>:{val.Brand}</h3>
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

