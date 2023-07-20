import React from 'react';
import Products from "./Products";
import Checkout from './Checkout';



function Home() {
  return (
    <div>
      <div className="w-100">
        <img src="/images/ecommerce.jpg" className=" w-100" 
        style={{heght: "300px"}} alt="ecommerce"/>
      </div>
      <div className="products bg-light p-3">
        <div className="p-3 d-flex">
          <div className="w-50 p-2 bg-white m-2">
            <Products/>
          </div>
          <div className="w-50 p-2 bg-white m-2">
            <Products/>
          </div>
        </div>
        <div className="p-3 d-flex">
          <div className="p-2 bg-white m-2">
            <Products/>
          </div>
          <div className="p-2 bg-white m-2">
            <Products/>
          </div>
          <div className="p-2 bg-white m-2">
            <Products/>
          </div>
        </div>
        <div className="p-3">
          <div className="p-2 bg-white d-flex justify-content-center">
            <Products/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home