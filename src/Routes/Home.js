import React from 'react'
import Fashion from './Fashion'
import './fashion.css'
import KidsWear from './KidsWear'
import MensWear from './MensWear'
import WomensWear from './WomensWear'

export default function Home() {
  return (
    <>
      <div className='parent-cont'>
        <div className='sub-container'>
           <h1 className='quote'>FUN, FASHION,<span>SAVINGS & MORE</span></h1>
           <p className='para'>Life Is Not Perfect But Your Outfit Can Be.</p>
        </div>
      </div>
      <Fashion/>
      <div>
        <h1 className='name'>Womens collection</h1>
        <WomensWear/>
      </div>
      <div>
        <h1 className='name'>Mens Collection</h1>
        <MensWear/>
      </div>
      <div>
        <h1 className='name'>Kids Wear</h1>
        <KidsWear/>
      </div>
    </>
  
  )
}
