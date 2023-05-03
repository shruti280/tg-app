import React, {forwardRef, useEffect} from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

//import images to use......

import img14 from '../../Assets/morocco.jpg'
import img15 from '../../Assets/eiffel tower.jpg'
import img16 from '../../Assets/outside tunisia (2).jpg'
import img17 from '../../Assets/wonderful exp (1).jpg'

//so guys, here also we are going to use the Map method to display our posts.

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
    {
        id: 1,
        postImage: img14,
        title: 'Beautiful Morocco, let us travel!',
        desc: 'The kingdom of Morocco is a Muslim county in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
    },
    {
        id: 2,
        postImage: img15,
        title: 'Romantic moments under Eiffel Tower',
        desc: 'with vast swaths of desert in its east and west and the rich Nile River Valley at its hert, is site to one of the worlds earliest and greatest civilisations'
    },
    {
        id: 3,
        postImage: img16,
        title: 'Let us have an adventure outside Tunisia',
        desc: 'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region'
    },
    {
        id: 4,
        postImage: img17,
        title: 'Let us have an adventure outside Tunisia',
        desc: 'When kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republuc promoted a sense of national unity using the motto.'
    }

]

const Blog = (props, ref) => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section ref={ref} className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                        Our Best Blog?
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">An insight to the incredible experience in the
                        world.</p>
                </div>
                <div className="mainContainer grid">
                    {
                        Posts.map(({id, postImage, title, desc}) => {
                            return (
                                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title} srcSet=""/>
                                    </div>
                                    <div className="postDetails">
                                        <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                                        <p data-aos="fade-up" data-aos-duration="4000">{desc} </p>
                                    </div>

                                    <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                                        <BsArrowRightShort className="icon"/>
                                        Read More
                                    </a>
                                </div>

                            )


                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Blog)