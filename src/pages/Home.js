import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import axios from 'axios';
import endpoints from '../services/movieServices';
import MovieRow from '../components/MovieRow';


const Home = () => {
 

  
  return (
    <div >
   
     <Hero/>
     <MovieRow title="Upcoming"   url={endpoints.upcoming}/>
     <MovieRow  title="Top Rated" url={endpoints.topRated} />
     <MovieRow title="Trending"  url={endpoints.trending}
     />
     <MovieRow title="Comedy" url={endpoints.comedy}/>
    </div>
  )
}

export default Home
