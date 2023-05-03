import React, {forwardRef, useEffect} from 'react'
import './popular.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'



//Import the images
import img2 from '../../Assets/peru.jpg'
import img5 from '../../Assets/mexico.jpg'
import img7 from '../../Assets/cambodia.jpg'
import img9 from '../../Assets/india.jpg'
// console.log(imgSrc)



import Aos from 'aos'
import 'aos/dist/aos.css'


// So now we are goin to use a high order array method to
//display all the destination using Map. To do so we need to list all the destination in one array "Data" and later we shall call each destination by index/id.

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
  }

]



const Popular = (props,ref) => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section ref={ref} className="popular section container">
      <a id={'#Popular'} className="btn"></a>
      <div className="secContainer">
        <div className="secHeader flex">
          <div  data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">
              Popular Desitination
            </h2>
            <p>From historical cities to natral specteculars, come see the best of the world!</p>
          </div>
          <div  data-aos="fade-left" data-aos-duration="2500"  className="iconsDiv flex">
            <BsArrowLeftShort className="icon lefticon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, grade}) => {
              return (
              
                <div  data-aos="fade-up"  className="singleDestination" > 
                 {/* {console.log(imgSrc)} */}
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />
                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>
                      <BsArrowRightShort className='icon' />
                    </div>

                  </div>
                  <div className="destFooter">
                    <div className="number">
                      0{id}
                    </div>
                    <div className="destText flex">
                      <h6>
                       {location}
                      </h6>
                      <span className='flex'>
                        <span className="TravMeo">
                          <BsDot className="icon" />TravMeo
                        </span>
                      </span>
                    </div>

                  </div>

                </div>

              )
            })
          }


        </div>
      </div>
    </section >
  )
}

export default forwardRef(Popular)
