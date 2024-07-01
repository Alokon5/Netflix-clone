import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useAuth } from '../context/AuthContext'
import {db } from '../services/fireBase'
import { arrayRemove,doc,onSnapshot,updateDoc } from 'firebase/firestore'
import MovieCard from '../components/MovieCard'

const Profile = () => {
  const [movie,setMovie] = useState([])
  const {user} = useAuth()
  useEffect(()=>{
    onSnapshot(doc(db, 'users', `${user.email}`), (doc)=>{
      if(doc.data()) setMovie(doc.data().favShows)
    })
  },[user?.email])
console.log(movie)
  return (
   <div className=''>
    <div>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg" alt='loading' className='   w-full h-[400px]  object-cover ' /> 
      <div className=' absolute w-full h-[400px] bg-black/70 top-0 left-0 z-10 '></div>
      <h1 className='p-2 text-3xl font-bold '>Fav Shows</h1>
      </div>
      <div className='flex w-full gap-5'>
      {
        movie?.map((movie)=>{
          console.log(movie);
         return ( 
          
         <div className=' w-[200px] relative rounded-xl '>
          <img  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} width={200} alt='loading' className='rounded top-1/2'/>
          <h1 className=' absolute top-10 right-5'>{movie.title}</h1>
          </div>
        
         ) })
      }
        </div>
    </div>
  )
}

export default Profile
