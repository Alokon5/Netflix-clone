import React from 'react'
import endpoints from '../services/movieServices';
import { useState,useEffect } from 'react';



const Hero = () => {
    const [movie,setMovie] = useState({});
// console.log(movie)
const [random,setRandom] = useState(false)



useEffect(()=>{
   async function fetchData(){
    const response = await fetch(endpoints.popular);
    const data = await response.json();
    const movies = data.results;

    // setMovie(data.results)
    
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    
   
    
    setMovie(randomMovie)
   }
   fetchData()
},[random])

setTimeout(()=>{
   setRandom(!random)
},5000)

const {title,backdrop_path,release_date,overview} = movie;

   function trunc(text,size){
   if(!text){
      return "";
   }

      return text.length > size ? text.slice(0,size) + "..." : text;
   }
 
  return (
    <div className=' w-screen h-[180px] md:h-[400px] lg:h-[500px] overflow-y-hidden relative    '>
    <div className=' w-full h-full'>
     <div className=' absolute bg-zinc-950  hero-img  w-full h-full lg:h-full     '>
  
     <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} className=' object-cover object-top   bg-black opacity-40  '  />
     
      <div className=' absolute w-full top-[40%] p-4 md:p-8 lg:top-[45%]  '>
         <h1 className=' text-xl lg:text-3xl  md:text-6xl font-bold '>
            {title}
         </h1>
         <div className=' lg:mt-8 lg:mb-4'>
             <button className=' capitalize border bg-gray-300 text-black font-bold border-gray-300 py-2 px-3 lg:px-5 '>Play</button>
             <button className=' capitalize border border-gray-300 font-bold py-2 px-3 lg:px-5 ml-4'>Watch later</button>
         </div>
         <p className=' text-gray-400 text-sm hidden lg:block md:block'>{release_date}</p>
         <p className=' md:max-w-[50%] sm:max-w-[full] lg:max-w-[60%] overflow-hidden hidden lg:block md:block'>{trunc(overview,165)}...</p>
      </div>
     </div>

    </div>
  
 </div>
  )
}

export default Hero;
