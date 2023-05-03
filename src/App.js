import React, {useRef} from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import Blog from './Components/Blog/Blog';
import Offers from './Components/Offers/Offers';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';

const App = () => {
    const home = useRef(null);
    const popular = useRef(null);
    const offers = useRef(null);
    const blog = useRef(null);
    const handleScroll = (value) => {
        window.scrollTo({
            top: value.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <Navbar onClick={handleScroll} home={home} popular={popular} offers={offers} blog={blog}/>
            <Home ref={home}/>
            <Popular ref={popular}/>
            <Offers ref={offers}/>
            <Profile/>
            <Blog ref={blog}/>
            <Footer/>
        </>
    )
}

export default App
