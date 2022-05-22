import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PYABAU/in_prime_pya_1500x400_header_1.jpg" alt=""/>
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}

            </div>
        </div>

        <div className="checkout__right">
            <h2>The Subtotal will go here</h2>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout