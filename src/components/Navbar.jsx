import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiHandbag } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";

const Navbar = ({ user }) => {

  useEffect(() => {
    document.title = 'Bag - Apple'
  }, [])

  const renderProfileIcon = () => {
    if (user) {
      return <img src={user.photoURL} alt="Profile" className="navbar__profile-picture" />
    } else {
      return (
        <Link to="/sign-in" className='navbar__sigin-link'>
          <RiUser3Line className="navbar__iconwrap__user navbar__icons" />
        </Link>
      )
    }
  };

  return (
    <nav className='navbar'>
        <div className='navbar__logo__wrap'>
          <Link className='navbar__icon__link' to="/">
            <FaApple className='navbar__logo'></FaApple>
          </Link>
        </div>
        <ul className='navbar__ul'>
            <li className='navbar__ul__item'>Product</li>
            <li className='navbar__ul__item'>Explore</li>
            <li className='navbar__ul__item'>Support</li>
            <li className='navbar__ul__item'>Business</li>
        </ul>
        <div className='navbar__iconwrap'>
            <IoIosSearch className='navbar__icons'/>

            <Link to ="/cart" className='navbar__icon__link'>
              <PiHandbag className='navbar__icons'/>
            </Link>
            {renderProfileIcon()}
        </div>
    </nav>
  )
}

export default Navbar