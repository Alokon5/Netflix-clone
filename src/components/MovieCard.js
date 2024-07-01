import React, { useContext, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { arrayUnion,updateDoc,doc } from 'firebase/firestore';
import {db} from '../services/fireBase'



const MovieCard = ({title,backdrop_path}) => {
       const [like,setLike] = useState(false);
    console.log(backdrop_path)
const {user} = useAuth()
   async  function markFav(){
      const userEmail = user?.email;

      if(userEmail){
        const userDoc = doc(db, "users", userEmail);
        await updateDoc(userDoc,{
          favShows: arrayUnion({title,backdrop_path}),
        }

      )
      setLike(!like)
      
      }
      else{
        alert("login fisrt");
      }
     }


  return (
    <div className='w-[200px] rounded-lg relative transition-all '>
      
        
        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} width={200} className='hover:w-[220px] rounded-lg'/>
        <div className=' top-0 left-0 absolute w-full h-full bg-black opacity-0 hover:opacity-95'>
        <p className=' mt-10 text-center '>{title.slice(0,10)}</p>
        <button onClick={markFav} className=' absolute top-2 right-2'>{
           like ? (<FaHeart className=' text-red-600'/>):(<FaRegHeart />)
          }</button>
        </div>
       


    </div>
  )
}

export default MovieCard;
