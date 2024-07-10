import React from 'react';
import HeaderAdmin from './HeaderAdmin';

const Dashboard = () => {
  const authors = [
    {
      Amt: '0',
      name: 'Completed payment'
    },
    {
      Amt: '1',
      name: 'Order Placed'
    },
    {
      Amt: '8',
      name: 'Product added'
    },
    {
      Amt: '3',
      name: 'Normal users'
    },
    {
      Amt: '1',
      name: 'Admin users'
    },
    {
      Amt: '3',
      name: 'Total accounts'
    },
    {
      Amt: '1',
      name: 'New messages'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">DASHBOARD</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-8 mx-auto w-4/5">
        {authors.map((author, index) => (
          <div key={index} className="bg-white border border-gray-400 p-8 rounded-xl shadow-xl hover:shadow-2xl">
            <h1 className="text-3xl font-bold mb-4">${author.Amt}/-</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg">
              {author.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
