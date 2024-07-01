import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const Navbar = () => {
const {user,logOut} = useAuth()
const navigate = useNavigate();

 async function handleLogout(){
      try {
        await logOut()
        navigate('/')
      }catch(err){
        alert(err)
      }
}

  return (
    <div className=' absolute flex justify-between items-center z-50 p-4 w-screen '>
      <NavLink to={'/'}><h1 className=' text-xl lg:text-5xl font-bold text-red-600 cursor-pointer'>NETFLIX</h1></NavLink>
     <div> 
      {
        user?.email ? (<><NavLink to='/profile'>
             <button className=' capitalize px-4  lg:px-6 py-2 rounded cursor-pointer '>Profile</button>
     </NavLink>
    
          <button onClick={handleLogout} className=' capitalize bg-red-600 px-4 lg:px-6 py-2 rounded cursor-pointer mr-2 '>Logout</button>
     </>):(<> <NavLink to={'/login'}>
          <button className=' capitalize px-4  lg:px-6 py-2 rounded cursor-pointer '>Login</button>
     </NavLink>
        <NavLink to={'/signup'}>
          <button className=' capitalize bg-red-600 px-4 lg:px-6 py-2 rounded cursor-pointer mr-2 '>signup</button>
     </NavLink></>)
      }
    
     </div>
    </div>
  )
}

export default Navbar
