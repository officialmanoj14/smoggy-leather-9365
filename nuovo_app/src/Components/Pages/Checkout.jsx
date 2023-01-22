import React from 'react';
import { Cart } from '../Cart/Cart';
import { CheckoutOrderSummary } from '../Checkout/CheckoutOrderSummary';

const Checkout = () => {
 

  return (
    <div>
      <div style={{width:'100%', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
      <img src='secure_paymentimage.png' alt='image' style={{margin:'auto'}}/>
      </div>
      <div style={parentDiv}>
        <div style={childDiv1}>
          <h1>Checkout</h1>
        </div>
        <div style={childDiv2}>
        <img src='payment_img.jpg' alt='image' style={{margin:'auto'}}/>
          <CheckoutOrderSummary/>
        </div>
      </div>
    </div>
  )
}

export default Checkout;


const parentDiv = {
  // border:'1px solid red',
  margin:'auto',
  width:'95%',
  height:'auto',
  display:'flex',
  marginTop:'20px',
  justifyContent:'space-between',
  marginBottom:'30px'
}

const childDiv1 = {
width:'62%',
// border:'1px solid blue'

}

const childDiv2 = {
width:'35%',
// border:'1px solid green'
}