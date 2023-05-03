import React, {useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {Link} from "react-router-dom";


const Navbar = ({onClick,home,popular,offers,blog}) => {
//code to toggle/show navbar
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
//code to remove navbar

    const removeNav = () => {
        setActive('navBar')
    }


//code to add background color to the header...
    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('header activeHeader')
        } else {
            setTransparent('header ')
        }
    }

    window.addEventListener('scroll', addBg)

    return (
        <section className="navBarSection">
            <div className={transparent}>
                <div className="logoDiv">
                    <a href="#" className="Logo">
                        <h1 className='flex'><SiYourtraveldottv className="icon"/>TravMeo</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem" onClick={() => onClick(home)}>
                            <Link to={'/Home'} className='navLink' >Home</Link>
                        </li>

                        <li className="navItem" onClick={() => onClick(popular)}>
                            <Link to={'/Popular'} className='navLink'>Popular</Link>
                        </li>

                        <li className="navItem" onClick={() => onClick(offers)}>
                            <Link to={'/Offers'} className='navLink'>Offers</Link>
                        </li>

                        <li className="navItem">
                            <Link to={'/Contacts'} className='navLink'>Contacts</Link>
                        </li>

                        <li className="navItem" onClick={() => onClick(blog)}>
                            <Link to={'/Blog'} className='navLink'>Blog</Link>
                        </li>
                        <div className="headerBtns flex">
                            <button className='btn loginBtn'>
                                <Link to={'/'}>Login</Link>
                            </button>
                            <button className='btn loginBtn'>
                                <Link to={'/'}>Sign Up</Link>
                            </button>
                        </div>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icons"/>
                </div>
            </div>
        </section>
    )
}

export default Navbar
