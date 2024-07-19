import React from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";

const HeaderAdmin = () => {
  return (
    <>
<div className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold">
          Admin <span className="text-blue-500">Panel</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/admin/dashboard" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/admin/products" className="hover:text-blue-500">Products</Link>
          </li>
          <li>
            <Link to="/admin/orders" className="hover:text-blue-500">Orders</Link>
          </li>
          <li>
            <Link to="/admin/users" className="hover:text-blue-500">Users</Link>
          </li>
          <li>
            <Link to="/admin/messages" className="hover:text-blue-500">Messages</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <IoPerson size={24} className="text-white hover:text-blue-500" />
        </div>
      </nav>
    </div>
    </>
  );
}

export default HeaderAdmin
