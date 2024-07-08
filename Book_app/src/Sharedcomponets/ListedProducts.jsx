import React from 'react'

import Image1 from '../../public/images/the_world.jpg'; 
import Image2 from '../../public/images/the_happy_lemon.jpg';
import Image3 from '../../public/images/darknet.jpg';
import Image4 from '../../public/images/be_well_bee.jpg';
import Image5 from '../../public/images/red_queen.jpg';
import Image6 from '../../public/images/nightshade.jpg';

export const ListedProducts = () => {
  return (
    <div>
          {/* Hero Section */}


     {/* Latest Products Section */}
     <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">LATEST PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-40">
            
          {/* Product 1 */}
          <div className=" border border-black p-7 rounded-lg shadow-lg">
            <div className='relative bg-cover bg-no-repeat w-full h-64 font-bold' style={{ backgroundImage: `url(${Image1})` }}>
                <h1 className='absolute top-[-10px] left-[-10px] bg-red-500 text-white p-2 rounded-md'>$50/-</h1>
              {/* Empty div to create space for image */}
            </div>

            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-2 text-center">The World of Art</h3>
              <input type="number" value={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
            </div>
          </div>

          {/* Repeat for more products */}
          <div className="relative border border-black p-7 rounded-lg shadow-lg">
            <div className=' bg-cover bg-no-repeat w-full h-64' style={{ backgroundImage: `url(${Image2})` }}>
            <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>$20/-</h1>
              {/* Empty div to create space for image */}
            </div>
            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-2 text-center">happy lemons</h3>
              <input type="number" value={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
            </div>
          </div>

          <div className="relative border border-black p-7 rounded-lg shadow-lg">
            <div className='bg-cover bg-no-repeat w-full h-64' style={{ backgroundImage: `url(${Image3})` }}>
            <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>$16/-</h1>

              {/* Empty div to create space for image */}
            </div>
            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-2 text-center">darknet</h3>
              <input type="number" value={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
            </div>
          </div>

          
          <div className="relative border border-black p-7 rounded-lg shadow-lg">
            <div className='bg-cover bg-no-repeat w-full h-64' style={{ backgroundImage: `url(${Image4})` }}>
            <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>$12/-</h1>

              {/* Empty div to create space for image */}
            </div>
            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-2 text-center">be_well_bee</h3>
              <input type="number" value={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
            </div>
          </div>


          
          <div className="relative border border-black p-7 rounded-lg shadow-lg">
            <div className='bg-cover bg-no-repeat w-full h-64' style={{ backgroundImage: `url(${Image5})` }}>
            <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>$16/-</h1>

              {/* Empty div to create space for image */}
            </div>
            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-2 text-center">red_queen</h3>
              <input type="number" value={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
            </div>
          </div>


          
          <div className="relative border border-black p-7 rounded-lg shadow-lg">
            <div className='bg-cover bg-no-repeat w-full h-64 text-center' style={{ backgroundImage: `url(${Image6})` }}>
            <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>$16/-</h1>

              {/* Empty div to create space for image */}
            </div>
            <div className='mt-4'>
              <h3 className="text-lg font-semibold mb-2">The World of Art</h3>
              <input type="number" value={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
              <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
            </div>
          </div>

           
         </div>
      </div>


      {/* Load More Button */}
      <div className='flex justify-center mt-10'>
        <div className='bg-yellow-700 p-3 rounded shadow-lg hover:bg-black'>
          <button className='font-bold text-white px-4 rounded '>Load more</button>
        </div>
      </div>

      
    </div>
  )
}

export default ListedProducts;