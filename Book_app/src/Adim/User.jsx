import React from 'react';
import HeaderAdmin from './HeaderAdmin';

const User = () => {
  const users = [
    { id: 1, username: 'John Doe', email: 'johndoe@example.com', userType: 'admin' },
    { id: 2, username: 'Jane Smith', email: 'janesmith@example.com', userType: 'user' },
    { id: 3, username: 'Alice Johnson', email: 'alicejohnson@example.com', userType: 'moderator' },
  ];

  return (
    <div className="p-4">
      <HeaderAdmin />    
      <h3 className="text-xl font-bold mb-4">USER ACCOUNTS</h3>   
      {/* Container for user details */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Userid: <span className="font-normal">{user.id}</span></h3>
            <h3 className="font-semibold">Username: <span className="font-normal">{user.username}</span></h3>
            <h3 className="font-semibold">Email: <span className="font-normal">{user.email}</span></h3>
            <h3 className="font-semibold">User Type: <span className="font-normal">{user.userType}</span></h3>
            <button className='bg-red-700 text-white px-3 py-1 rounded mt-2'>Delete User</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
