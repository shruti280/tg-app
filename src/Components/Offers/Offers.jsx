import React, {forwardRef, useEffect} from 'react'
import './offers.css'
import{MdKingBed} from 'react-icons/md'
import{MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import{MdAirportShuttle} from'react-icons/md'
import{MdLocationOn} from'react-icons/md'
import{BsArrowRightShort} from 'react-icons/bs'

//let us import imags

import img3 from '../../Assets/hotel (2).jpg'
import img4 from '../../Assets/hotel.jpg'
import img6 from '../../Assets/house.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


//so since we have finished styling every content, let us also use the same high order array methods (MAP) to list our offers.

const Offer =[
  {
    id: 1,
    imgSrc: img3,
    destTitle: 'Machu Picchu',
    location: 'Peru',
price : '$7,452'
  },
  {
    id: 2,
    imgSrc: img4,
    stTitle: 'Guanajuato',
    location: 'Mexico',
    price : '$2,452'
  },
  {
    id: 3,
    imgSrc: img6,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price : '$4,400'
  }
]



const Offers = (props,ref) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section ref={ref} className='offer container section'>
      <div className="secContainer">
        <div  data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special Offers </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">
         {
          Offer.map(({id,imgSrc,stTitle,location,price})=>{
            return(
              <div  data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
              <div className="destImage">
                <img src={imgSrc} alt={stTitle} srcSet="" />
                <span className='discount'>
                  30% Off
  
                </span>
              </div>
  <div className="offerBody">
    <div className="price flex">
      <h4>{price}</h4>
      <span className="status">
        For Rent
      </span>
    </div>
  
  <div className="amentites flex">
    <div className="singleAmenty flex">
      <MdKingBed className='icon'/>
      <small>2 Beds</small>
  
    </div>
  
    <div className="singleAmenty flex">
      <MdBathtub className='icon'/>
      <small>1 Bath</small>
  
    </div>
  
    <div className="singleAmenty flex">
      <FaWifi className='icon'/>
      <small>Wi-Fi</small>
  
    </div>
    <div className="singleAmenty flex">
      <MdAirportShuttle className='icon'/>
      <small>Shuttle</small>
  
    </div>
  
  </div>
  
  <div className="location flex">
  <MdLocationOn className='icon'/>
  <small>450 Vine #310, {location} </small>
  </div>
  <button className="btn flex">
    View Details 
    <BsArrowRightShort className='icon'/>
  </button>
  
  </div>
  
            </div>
            )
          })
         }
        </div>

      </div>
    </section>
  )
}

export default forwardRef(Offers)
