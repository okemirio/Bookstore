import React from "react";

import Image1 from "../../public/images/the_world.jpg";

export const ListedCart = () => {
  return (
    <>
      {/* Hero Section */}

      {/* Latest Products Section */}
      <div className="mt-44">
        <h1 className="text-2xl font-bold mb-4 text-center">PRODUCT ADDED</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-40">
          {/* Product 1 */}
          <div className=" border border-black p-7 rounded-lg shadow-lg">
            <div
              className="relative bg-cover bg-no-repeat w-full h-64 font-bold"
              style={{ backgroundImage: `url(${Image1})` }}
            >
              <h1 className="absolute top-[-10px] right-[-10px] bg-red-500 text-white p-2 rounded cursor-pointer">
                X
              </h1>
              {/* Empty div to create space for image */}
            </div>
            <div className="text-center m-2  text-red-500 text-xl">
              <h1>$50/ -</h1>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              The World of Art
            </h3>

            <div className="mt-4 flex">
              <input
                type="number"
                value={1}
                name="quantity"
                className="border border-gray-300 rounded-md p-2 mb-2 w-full"
              />
              <button className="bg-yellow-600 text-white p-2 rounded-md w-full">
                Update
              </button>
            </div>
            <h1 className="text-center m-4">Sub total: <span className="text-red-500 text-xl">$50/-</span></h1>

          </div>
        </div>
      </div>
    </>
  );
};

export default ListedCart;
