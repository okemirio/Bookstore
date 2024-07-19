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
      price: '$200',
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
      price: '$200',
    },
    {
      id: 4,
      image: Image4,
      name: 'Be Well Bee',
      price: '$200',
    },
    {
      id: 5,
      image: Image5,
      name: 'Red Queen',
      price: '$200',
    },
    {
      id: 6,
      image: Image6,
      name: 'Nightshade',
      price: '$200',
    },
    {
      id: 7,
      image: Image7,
      name: 'Economic',
      price: '$200',
    },
    {
      id: 8,
      image: Image8,
      name: 'Holy Ghosts',
      price: '$200',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-40 py-10">
        {products.map((product) => (
          <div key={product.id} className="border border-black p-7 rounded-lg shadow-lg">
            <div
              className="relative bg-cover bg-no-repeat w-full h-96 font-bold"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {/* Empty div to create space for image */}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
            <div className='flex justify-center'>
            <p className="text-sm text-red-700 font-bold text-500">{product.price}</p>

            </div>
            <div className="mt-4 flex gap-1">
              <button className="bg-orange-600 text-white p-2 rounded-md w-full hover:bg-black">Update</button>
              <button className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-black">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedShop;
