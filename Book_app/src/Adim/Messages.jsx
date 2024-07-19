import React from 'react';
import HeaderAdmin from './HeaderAdmin';

const Messages = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', message: 'you are good' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', message: 'you are great' },
    { id: 3, name: 'Mike Doe', email: 'mike@example.com', message: 'you are good' },
    { id: 4, name: 'Sarah Doe', email: 'sarah@example.com', message: 'you are great' },
    
   
  ];

  return (
    <div className="p-4">
      <HeaderAdmin />
     <div className='flex flex-col justify-center items-center'>
     <h3 className="text-xl font-bold mb-4">USER ACCOUNTS</h3>
      {/* Container for user details */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Userid: <span className="font-normal">{user.id}</span></h3>
            <h3 className="font-semibold">Username: <span className="font-normal">{user.name}</span></h3>
            <h3 className="font-semibold">Email: <span className="font-normal">{user.email}</span></h3>
            <h3 className="font-semibold">User Type: <span className="font-normal">{user.message}</span></h3>
            <button className='bg-red-700 text-white px-3 py-1 rounded mt-2'>Delete Message</button>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
}

export default Messages;
