import React, { useState, useEffect } from 'react';
import './Cart.css'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useCart } from '../context/context';
import { FaChevronDown } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";

const Cart = () => {

  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    setTotalPrice(cartItems.reduce((acc, item) => acc + item.price * item.count, 0))
  }, [])

  const { cartItems, removeFromCart } = useCart()

  const [totalPrice, setTotalPrice] = useState(0)
  const [triggerState, setTriggerState] = useState(0)

  useEffect(() => {
      setTotalPrice(cartItems.reduce((acc, item) => acc + item.price * item.count, 0))
  }, [triggerState])

  const calculateOneProduct = (productId) => {
    const product = cartItems.find(item => item.id === productId)
    if (product) {
      return product.price * product.count
    }
    return 0
  }

  return (
    <>
      <Navbar />
      <main className='cart__container'>
        {cartItems.length === 0 ? (
          <section className='cart'>
            <h1 className='cart__bag'>Your bag is empty.</h1>
            <p className='cart__delivery'>Free delivery and returns</p>
            <Link to="/" className='buttons cart__button'>Continue Shopping</Link>
          </section>
        ) : (
          <div>
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
                    <button className='cart__remove' onClick={() => {
                        removeFromCart(item.id)
                        setTriggerState(prevState => prevState += 1)
                      }}>Remove</button>
                  </div>
                  
                </div>
              ))}
            </section>

            <div className="total__checkout__container">
              <section className='total__section'>
                <div className='total'>
                  <div className='total__info__wrap'>
                    <p>Subtotal</p>
                    <p>${totalPrice}.00</p>
                  </div>
                  <div className='total__info__wrap'>
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className='total__info__wrap'>
                    <p>
                      Estimated tax for: <span className=''>Enter zip code</span>
                      <FaChevronDown />
                    </p>
                    <p>$ -</p>
                  </div>
                </div>
                <div className='total__info__wrap'>
                  <h4>Total</h4>
                  <h4>${totalPrice}.00</h4>
                </div>
              </section>


              <section className='checkout'>
                <h4>How would you like to check out?</h4>
                <div className='checkout__wrap'>

                  <div className='checkout__box first__box'>
                    <h4>
                      <span>Pay Monthly</span><br />
                      <span>with Apple Card</span><br />
                      <span>$283.16/mo. at 0% APR</span>
                    </h4>
                    <button className='checkout__button'>
                      Check Out with Apple Card <br />
                      Monthly Installments
                    </button>
                    <p className='tax__info'>
                      $0.00 due today, which includes<br /> 
                      applicable full-price items, down<br /> 
                      payments, shipping, and taxes.
                    </p>
                    
                  </div>

                  <div className='checkout__box second__box'>
                    <h4 className='checkout__pay'>
                      Pay in full<br />
                      <span>${totalPrice}.00</span>
                    </h4>
                    <a href=""  className='checkout__button checkout__second__button'>
                        <BsLightningCharge className='checkout__button__icon'/>
                        Check Out
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
