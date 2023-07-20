import React from 'react';


function Products() {
  return (
    <div>
        <h2>Title of Products</h2>
        <strong>$12</strong>
        <p>⭐⭐⭐</p> 
        <div className='d-flex flex-column align-items-center'>
        <img src="/images/pc.jpg" className="w-50 mt-1" alt="pc" />
        <button className="btn btn-warning w-auto mt-3">Add Product</button>
        </div>
        
    </div>
  )
}

export default Products