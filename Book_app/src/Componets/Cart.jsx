import React from 'react'
import Header from '../Sharedcomponets/Header';
import ListedCart from '../Sharedcomponets/ListedCart';
import Footer from '../Sharedcomponets/Footer';
import { Link } from 'react-router-dom';

 const Cart = () => {
  return (
    <div>
  <Header/>
  <ListedCart/>
  
    <h2 className='border border-black p-2 mx-96 my-3 text-red-400 text-center font-bold'> 
        Your cart is empty
    </h2>
  
<div className='border border-black my-6 py-4 mx-28'> 
<div className=' text-white font-medium text-center  '>
        <button className='bg-black p-2 rounded'>Delete All</button>
      </div>
      <div className='flex flex-col items-center m-4 '>
        <h1>
            grand total: <span className='text-red-500 font-bold'>$272/-</span>
        </h1>
     <div className='flex gap-2 m-3'>
     <button className='bg-orange-400 p-1 rounded '>Continue Shopping</button>
     <button className='bg-blue-600 p-1 rounded'><Link to="/checkout">     Proceed to checkout
     </Link> 
     </button>
     </div>
      </div>
</div>
<Footer/>
    </div>
  )
}

export default Cart;