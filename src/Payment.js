import React,{useState} from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import {Link, useNavigate} from 'react-router-dom'
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { useEffect } from 'react';
import axios from './axios'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useNavigate();

    const stripe  = useStripe ();
    const elements = useElements();  

    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(()=>{
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async()=>{
            const response = await axios({
                method: 'post',
                // stripe expects a total in currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket)* 100}`

            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])
    
    const handleSubmit = async (e) =>{
        //do all fancy stripe stuffs
        e.preventDefault();
        setProcessing(true);

       const payload = await stripe.confirmCardPayment(clientSecret,{
           payment_method:{
               card: elements.getElement(CardElement)
           }
       }).then(({paymentIntent})=>{
           // payment intent = the payment confirmation 

           setSucceded(true);
           setError(null);
           setProcessing(false);

           history.replace('/orders')
       })

    }

    const handleChange = e =>{
        //listen for changes in the card elements
        //and display any errors as the customer type their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket.length} items</Link>
                )
            </h1>
            {/* Payment section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                     { <p>{user?.email}</p> }
                       {/* using the optional chain */}
                       <p>123 React Line</p>
                       <p> Los Angeles, CA</p>
                </div>

            </div>
            {/* Payment section - review items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review item and delivery</h3>
                </div>
                <div className="payment__items">
                    {/* all the products are gonna show */}
                    {basket.map(item =>(
                        <CheckoutProduct
                        id ={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>

            </div>
            {/* Payment section - payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* stripe magic will go */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                                        <CurrencyFormat 
                        renderText={(value) =>(
                                <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2} 
                            value={getBasketTotal(basket)} //part
                            displayType={"text"}
                            thousandSeparator = {true} 
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                            </button>
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Payment