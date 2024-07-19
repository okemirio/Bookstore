import React from 'react';

import Image1 from '../../public/images/the_world.jpg'; 
import Image2 from '../../public/images/the_happy_lemon.jpg';
import Image3 from '../../public/images/darknet.jpg';
import Image4 from '../../public/images/be_well_bee.jpg';
import Image5 from '../../public/images/red_queen.jpg';
import Image6 from '../../public/images/nightshade.jpg';
import Image7 from '../../public/images/economic.jpg';
import Image8 from '../../public/images/holy_ghosts.jpg';

export const ListedShop = () => {
  const products = [
    {
      id: 1,
      image: Image1,
      name: 'The World',
      price: '$500',
    },
    {
      id: 2,
      image: Image2,
      name: 'The Happy Lemon',
      price: '$200',
    },
    {
      id: 3,
      image: Image3,
      name: 'Darknet',
      price: '$160',
    },
    {
      id: 4,
      image: Image4,
      name: 'Be Well Bee',
      price: '$120',
    },
    {
      id: 5,
      image: Image5,
      name: 'Red Queen',
      price: '$160',
    },
    {
      id: 6,
      image: Image6,
      name: 'Nightshade',
      price: '$160',
    },
    {
      id: 7,
      image: Image7,
      name: 'Economic',
      price: '$160',
    },
    {
      id: 8,
      image: Image8,
      name: 'Holy Ghosts',
      price: '$160',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">LATEST PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-40">
          {products.map((product) => (
            <div key={product.id} className="relative border border-black p-7 rounded-lg shadow-lg">
              <div
                className='relative bg-cover bg-no-repeat w-full h-96 font-bold'
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>{product.price}/-</h1>
              </div>
              <div className='mt-4'>
                <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
                <input type="number" defaultValue={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
                <button className="bg-blue-600 text-white p-2 rounded-md w-full">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className='flex justify-center mt-10'>
        <div className='bg-yellow-700 p-3 rounded shadow-lg hover:bg-black'>
          <button className='font-bold text-white px-4 rounded'>Load more</button>
        </div>
      </div>
    </div>
  );
};

export default ListedShop;
