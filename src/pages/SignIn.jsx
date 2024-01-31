import React, { useState, useEffect } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from "../firebase/config"
import { signInWithPopup } from "firebase/auth"

const SignIn = ({ onSignIn }) => {

  useEffect(() => {
    document.title = 'Sign In'
    let bodyElement = document.body
    let rootElement = document.getElementById('root')

    if (bodyElement && rootElement) {
        bodyElement.style.minHeight = '100vh'
        rootElement.style.height = '100vh'
    }
  }, [])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleSignInText, setToggleSignInText] = useState('Sign in with Google')

  const navigate = useNavigate()
  

  useEffect(() => {
    const sizeControl = () => {
      setWindowWidth(window.innerWidth)
  
      if (windowWidth <= 777) {
        setToggleSignInText('Sign in')
      } else {
        setToggleSignInText('Sign in with Google')
      }
    }
  
    window.addEventListener('resize', sizeControl)
  
    return () => {
      window.removeEventListener('resize', sizeControl)
    }
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate('/')
    })
  }

  
  return (
    <div className='signin'>
        <h1 className='signin__text'>{toggleSignInText}</h1>
        <button onClick={handleClick} className='signin__button buttons'>Sign In</button>
        <Link to='/' className='signin__back-button buttons'>Go Back</Link>
    </div>
  )
}

export default SignIn