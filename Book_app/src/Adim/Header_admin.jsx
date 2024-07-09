import React from 'react'

 const Header_admin = () => {
  return (
    <div>
        <nav>
           <div>
            <h1>Admin <span>Panel</span></h1>
           </div>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/">Products</Link>

            </li>
            <li>
            <Link to="/">Orders</Link>
    
            </li>
            <li>
            <Link to="/">Users</Link>

            </li>
            <li>
            <Link to="/">Messages</Link>

            </li>
        </nav>

    </div>
  )
}

export default Header_admin;