import React, {useEffect} from 'react'
import './profile.css'

//images

import img11 from '../../Assets/mountain.png'
import img12 from '../../Assets/hiking (1).png'
import img13 from '../../Assets/customer service.png'

//import video

import video from '../../Assets/video.mp4'


import Aos from 'aos'
import 'aos/dist/aos.css'



const Profile = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">
          Why Hikings?
        </div>

<div className="mainContent container grid">
  <div  data-aos="fade-up" data-aos-duration="2000" className="singleItem">
    <img src={img11} alt="Image/Name" srcset="" />
    <h3>100+ Mountains</h3>
    <p>Research shows that a chanve to break away from the normal rhythms of daily life reduces stress and imprves health and well-being</p>

  </div>

  <div  data-aos="fade-up" data-aos-duration="2500" className="singleItem">
    <img src={img12} alt="Image/Name" srcset="" />
    <h3>1000+ Hikings</h3>
    <p>Research shows that a chanve to break away from the normal rhythms of daily life reduces stress and imprves health and well-being</p>
    
  </div>

  <div  data-aos="fade-up" data-aos-duration="3000" className="singleItem">
    <img src={img13} alt="Image/Name" srcset="" />
    <h3>2000+ Customer</h3>
    <p>Research shows that a chanve to break away from the normal rhythms of daily life reduces stress and imprves health and well-being</p>
    
  </div>

</div>

<div className="videoCard container">
<div className="cardContent grid">
  <div data-aos="fade-right" data-aos-duration="2000"  className="cardText">
    <h2>Wonderful House experience nin there!</h2>
    <p>The Adventure subranking is based on an equally weighted average of scores from five country.</p>
  </div>
<div data-aos="fade-left" data-aos-duration="2000"  className="cardVideo">
  <video src={video} autoPlay loop muted 
  type="video/mp4"></video>
</div>

</div>
</div>

      </div>
    </section>
  )
}

export default Profile
