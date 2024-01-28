import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App