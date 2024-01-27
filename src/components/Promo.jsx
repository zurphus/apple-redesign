import React, { useEffect, useState } from 'react';
import './Promo.css';
import Navbar from './Navbar';
import products from '../data/products';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from '../context/context';
import { PiHandbag } from "react-icons/pi";
import { PiCloudFogLight } from 'react-icons/pi';

const Promo = () => {

    const { addToCart } = useCart()

    const [triggerState, setTriggerState] = useState(false)
    const [productCount, setProductCount] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])

    const [showMac, setShowMac] = useState(true)
    const [showiPhone, setShowiPhone] = useState(false)
    const [showWatch, setShowWatch] = useState(false)
    const [showiPad, setShowiPad] = useState(false)

    useEffect(() => {
        let updatedProducts = [];

        if (showMac) {
            updatedProducts = products.map(product => product.mac.variations)
        }
        if (showiPhone) {
            updatedProducts = products.map(product => product.iphone.variations)
        }
        if (showWatch) {
            updatedProducts = products.map(product => product.watch.variations)
        }
        if (showiPad) {
            updatedProducts = products.map(product => product.ipad.variations)
        }

        setFilteredProducts(updatedProducts.flat())
    }, [showMac, showiPhone, showWatch, showiPad, triggerState])

    const changeType = (productType) => {
        setTriggerState(true)

        setShowMac(productType === 'mac')
        setShowiPhone(productType === 'iphone')
        setShowWatch(productType === 'watch')
        setShowiPad(productType === 'ipad')
    };

    const handleOrder = (product) => {
        addToCart(product)
        setTriggerState(true)
        setProductCount(prevCount => prevCount += 1)
        console.log('fjsdklfsd')
    }

  return (
    <>
        
        <section className='promo'>
            <h2 className='promo__title'>New Promos</h2>
            <div className='promo__buttons__wrap'>
                <button className={`promo__type__buttons ${showMac ?    'promo__type__buttons__active': ''}`} onClick={() =>  changeType('mac')}>Mac</button>
                <button className={`promo__type__buttons ${showiPhone ? 'promo__type__buttons__active' : ''}`} onClick={() => changeType('iphone')}>iPhone</button>
                <button className={`promo__type__buttons ${showWatch ?  'promo__type__buttons__active' : ''}`} onClick={() => changeType('watch')}>Apple Watch</button>
                <button className={`promo__type__buttons ${showiPad ?   'promo__type__buttons__active' : ''}`} onClick={() => changeType('ipad')}>iPad</button>
            </div>

            <div className="products">
                {filteredProducts.map((product) => {
                    const { id, image, name, price } = product

                    return (
                        <div className='product' key={id}>
                            <img className='product__img' src={image} alt={name} />
                            <div className='product__info'>
                                <div className='product__details'>
                                    <p className='product__name'>{name}</p>
                                    <p className='product__price'>${price}</p>
                                </div>
                                <div onClick={() => handleOrder(product)} className='product__buy'>
                                    <MdOutlineShoppingCart className='cart-icon'/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link to="/cart" className={`shop__link ${triggerState ? 'shop__appear__active' : ''}`}>
                <PiHandbag className='shop__appear'/>
                <div className='count'>
                    <span>{productCount}</span>
                </div>
            </Link>
        </section>
    </>
  );
};

export default Promo;
