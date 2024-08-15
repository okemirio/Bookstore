import React, { useState } from "react";

const CartItem = ({ item, quantities, handleDelete, handleQuantityChange }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantities[item._id] || 1);

  const handleInputChange = (e) => {
    setCurrentQuantity(e.target.value);
  };

  const handleUpdateClick = () => {
    handleQuantityChange(item._id, currentQuantity);
  };

  return (
    <div className="border border-black p-6 rounded-lg shadow-lg bg-white">
      <div
        className="relative bg-cover bg-no-repeat w-full h-80 rounded-md"
        style={{ backgroundImage: `url(${item.productId.image})` }}
      >
        <h1
          onClick={() => handleDelete(item._id)}
          className="absolute top-[-10px] right-[-10px] bg-red-500 text-white p-2 rounded cursor-pointer"
        >
          X
        </h1>
      </div>
      <div className="text-center mt-4 text-red-500 text-xl">
        <h1>${item.productId.price}/-</h1>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">
        {item.productId.name}
      </h3>
      <div className="mt-4 flex flex-col items-center gap-2">
        <input
          type="number"
          value={currentQuantity}
          onChange={handleInputChange}
          name="quantity"
          className="border border-gray-300 rounded-md p-2 mb-2 w-32 text-center"
          min="1"
        />
        <div className="flex gap-2 justify-center w-full">
          <button
            onClick={() => handleDelete(item._id)}
            className="bg-red-600 text-white p-2 rounded-md w-full max-w-xs"
          >
            Delete
          </button>
          <button
            onClick={handleUpdateClick}
            className="bg-blue-600 text-white p-2 rounded-md w-full max-w-xs"
          >
            Update
          </button>
        </div>
      </div>
      <h1 className="text-center mt-4">
        Sub total:{" "}
        <span className="text-red-500 text-xl">
          ${(
            item.productId.price * (currentQuantity || 1)
          ).toFixed(2)}
          /-
        </span>
      </h1>
    </div>
  );
};

export default CartItem;
