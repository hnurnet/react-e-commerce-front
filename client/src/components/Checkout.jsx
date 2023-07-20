import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import Subtutal from './Subtutal';


function Checkout() {
  return (
    <div className='container-fluid'>
      <div className="row mt-2 min-vh-100">
        <div className="col-9">
        <img src='/images/amazonads.png' className='w-100' style={{height: "120px"}} alt='amazon add'/>
       <div className='mt-2'>
       <h3>Your Shopping Cart</h3>
       <CheckoutProduct/>
       <CheckoutProduct/>
       </div>
        </div>
        <div className="col-3">
         <Subtutal/>
        </div>

      </div>


    </div>
  )
}

export default Checkout