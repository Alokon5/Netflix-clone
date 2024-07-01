import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContext } from 'react';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [remember,setRemember] = useState(false);
  const navigate = useNavigate()
      
  async function submitHandler(e){
     e.preventDefault();
     console.log({email,password,remember})

     try{
      const user = await logIn(email,password)
      if(user){
        navigate('/')
       }
     }catch(err){
      console.log(err)
      alert(err)
     }
  }
  
  const {user,logIn} = useAuth()

  
  
    return (
      <div className=' w-full h-screen relative '>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt='loading' className=' sm:block  w-full h-screen absolute object-cover ' /> 
        <div className=' absolute w-full h-full bg-black/70 top-0 left-0 z-10 '></div>
  
        <div className='  w-full fixed px-4 py-24 z-20 '>
          <div className=' max-w-[350px] h-[400px]  mx-auto bg-black/80 rounded-lg'>
                 <div className=' max-w-[280px]  mx-auto py-16 '>
                  <h1 className=' font-bold text-3xl '>Log in</h1>
                  <form onSubmit={submitHandler}>
                  <input type='text' name='email' placeholder='Email' className=' bg-gray-700 p-2 rounded mt-3 w-full outline-none' onChange={(event)=>{setEmail(event.target.value)}} />
                   <input type='password' name='password' placeholder='Password' className=' bg-gray-700 p-2 rounded mt-2 mb-4 w-full outline-none' onChange={(event)=>{setPassword(event.target.value)}} />
                   <button className='w-full bg-red-600 p-2 rounded '>Signup</button>
  
                   <div className=' flex justify-between mt-1 text-gray-500'>
                    <p>
                    <input type='checkbox' name='remember' className='mr-1'  onChange={(event)=>{setRemember(!remember)}} />
                    <label htmlFor='remember'>Remember me</label>
                    </p>
                    <p>Need help?</p>
                   </div>
               
                    <p className=' mt-2'>
                      <span className=' text-gray-500'>Already subscribed to Netflix?</span>
                      <Link to='/signup'>Sign In</Link>
                    </p>
                   
                  </form>
                   
                 </div>
          </div>
           
        </div>
      </div>
    )
  }
  
  export default Login;
  