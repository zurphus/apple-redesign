import React, { useState } from 'react';
import './Cart.css'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useCart } from '../context/context';  // Update the import path
import { FaChevronDown } from "react-icons/fa6";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const [productCount, setProductCount] = useState(0)

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  };

  const calculateOneProduct = (productId) => {
    const product = cartItems.find(item => item.id === productId)
    if (product) {
      const count = cartItems.filter(item => item.id === productId).length
      return product.price * count
    }
    return 0;
  }

  

  return (
    <>
      <Navbar />
      <main>
        {cartItems.length === 0 ? (
          <section className='cart'>
            <h1 className='cart__bag'>Your bag is empty.</h1>
            <p className='cart__delivery'>Free delivery and returns</p>
            <Link to="/" className='buttons cart__button'>Continue Shopping</Link>
          </section>
        ) : (
          <section className="cart">
            <h1 className='cart__bag'>Review your bag.</h1>
            <p className='cart__delivery'>Free delivery and returns</p>
            {cartItems.map(item => (
              <div className='cart__product__container' key={item.id}>

                <div className="IMAGE">
                  <img className='cart__image' src={item.image} alt={item.name} />
                </div>
                
                
                <div className='NAME'>
                  <h3 className='cart__name'>{item.name}</h3>
                  <div className='cart__product__details-wrap'>
                    <p className='cart__product__details'>Show product details</p>
                    <FaChevronDown className='cart__product__details'/>
                  </div>
                </div>


                <div className='COUNT'>
                  <p className='cart__product__count'>{item.count}</p>
                  <FaChevronDown className='cart__product__details'/>
                </div>


                <div className='PRICE'>
                  <p className='cart__price'>${calculateOneProduct(item.id)}.00</p>
                  <button className='cart__remove' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                
              </div>
            ))}
            <p>${calculateTotal()}.00</p>
          </section>
        )}
      </main>
    </>
  );
};

export default Cart;
