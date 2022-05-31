import React,{useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Fragment } from "react";
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const promise =loadStripe(
  "pk_test_51L38szSCvfsdzw7suDjC85ABJc2mZjlBZYTBSigANLLn7zYDd4iLYP2az0uqf1T6WycyJVT3038tt8ec5q37ncEE00M9p7I6al"
);
 

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{ 
    //we will only use once when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('the user is ', authUser);

      if(authUser){
        //the user just logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    //BEM
   
    <div className="app">
    <BrowserRouter>
    
      <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={
          <Fragment>
          <Header/>
          <Checkout />
          </Fragment> }/>

          <Route path="/payment" element={
          <Fragment>
          <Header/>
          <Elements stripe={promise}>
          <Payment />
          </Elements>        
          </Fragment>} />

          <Route path="/" element={
          <Fragment>
          <Header/>
          <Home/>
          </Fragment>} />

      </Routes>

    </BrowserRouter>
    </div>
    
  );
}

export default App;
