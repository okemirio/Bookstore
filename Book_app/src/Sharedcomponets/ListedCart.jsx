import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const ListedCart = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isTokenValid = () => {
    const token = localStorage.getItem("authToken");
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime();
    return token && currentTime <= expirationTime;
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!isTokenValid()) {
        console.error("No valid token found, redirecting to login.");
        localStorage.removeItem("authToken");
        localStorage.removeItem("expirationTime");
        navigate("/");
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://bookkapp-backend.vercel.app/carts/cart/read",
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
          }
        );

        if (Array.isArray(response.data.cart)) {
          setItems(response.data.cart);

          const initialQuantities = response.data.cart.reduce((acc, item) => {
            acc[item._id] = item.quantity;
            return acc;
          }, {});
          setQuantities(initialQuantities);
        } else {
          setError("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setError("Error fetching cart data");
        if (error.response && error.response.status === 401) {
          alert("Session expired. Please log in again.");
          localStorage.removeItem("authToken");
          localStorage.removeItem("expirationTime");
          navigate("/");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [navigate]);

  const handleQuantityChange = async (productId, value) => {
    const token = localStorage.getItem("authToken");
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime();
  
    if (!token || currentTime > expirationTime) {
      console.error("No valid token found, redirecting to login.");
      localStorage.removeItem("authToken");
      localStorage.removeItem("expirationTime");
      navigate("/");
      return;
    }
  
    const newQuantity = Math.max(1, Number(value));
  
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  
    try {
      await axios.put(
        `https://bookkapp-backend.vercel.app/carts/cart/update/${productId}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      setError("Error updating quantity");
  
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] || 1,
      }));
    }
  };

  const handleDelete = async (productId) => {
    if (!isTokenValid()) return;

    try {
      await axios.delete(`https://bookkapp-backend.vercel.app/carts/cart/${productId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      });
      setItems(items.filter((item) => item._id !== productId));
      setQuantities((prevQuantities) => {
        const { [productId]: _, ...rest } = prevQuantities;
        return rest;
      });
    } catch (error) {
      console.error("Error deleting item:", error);
      setError(error.response?.data?.message || "Error deleting item from cart");
    }
  };

  const handleDeleteAll = async () => {
    if (!isTokenValid()) return;

    try {
      await axios.delete("https://bookkapp-backend.vercel.app/carts/cart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      });
      setItems([]);
      setQuantities({});
    } catch (error) {
      console.error("Error deleting all items from cart:", error);
      setError("Error deleting all items from cart");
    }
  };

  const subtotal = items.reduce((acc, item) => {
    const quantity = quantities[item._id] || 1;
    return acc + item.productId.price * quantity;
  }, 0);

  return (
    <div className="mt-8 mx-auto max-w-4xl p-4">
      <h1 className="text-2xl font-bold mb-4 text-center bg-red-900 text-white p-2 rounded">
        PRODUCTS ADDED
      </h1>

      {error && <div className="text-center text-red-500">{error}</div>}

      {items.length === 0 ? (
        <div className="text-center">
          <h2 className="border border-black p-2 mx-96 my-10 text-red-400 text-center font-bold">
            Your cart is empty
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              quantities={quantities}
              handleDelete={handleDelete}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
      )}

      <div className="border border-black my-6 py-4 mx-28">
        <div className="flex flex-col items-center m-4">
          <h1 className="text-2xl font-bold">
            Grand Total: <span className="text-red-500">${subtotal.toFixed(2)}</span>
          </h1>
          <div className="flex gap-2 m-3">
            <Link to="/">
              <button className="bg-orange-400 p-1 rounded">Continue Shopping</button>
            </Link>
            <Link to="/checkout">
              <button className="bg-blue-600 p-1 rounded">Proceed to Checkout</button>
            </Link>
          </div>
          {items.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="bg-black p-2 rounded text-white hover:bg-blue-600 mt-4"
            >
              Delete All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedCart;
