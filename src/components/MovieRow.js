import React, { useState } from 'react'
import { useEffect } from 'react'
import MovieCard from './MovieCard';
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdChevronLeft ,MdChevronRight } from 'react-icons/md';

const MovieRow = ({title,url}) => {

    const [movies,setMovies] = useState(undefined)

useEffect(()=>{
   async function fetchData(){
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
   console.log(movies)
   setMovies(movies);
   
   }
   fetchData()
},[])

  return (
    <div className=''>
    
      <h1 className=' text-3xl font-bold p-2'>{title}</h1>
     
      <div className='flex w-screen relative overflow-x-auto gap-5 scrollbar-hide scroll-smooth '>
     
        {
            movies?.map((movie)=>{
               return (
               <div className=' '>
               
               <MovieCard key={movie.id} {...movie}  />
              
                </div>)
            })
        }
        
      </div>
     
    </div>
  )
}

export default MovieRow
