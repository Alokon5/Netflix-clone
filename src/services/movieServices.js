// const key = import.meta.process.env.KEY;
const baseUrl = "https://api.themoviedb.org/3"

const endpoints = {
    popular : `${baseUrl}/movie/popular?api_key=e5f6584689e6b5449a044e041b9f6572`,
   topRated : `${baseUrl}/movie/top_rated?api_key=e5f6584689e6b5449a044e041b9f6572`,
    trending : `${baseUrl}/movie/popular?api_key=e5f6584689e6b5449a044e041b9f6572&language=en-US&page=2`,
    comedy : `${baseUrl}/search/movie?api_key=e5f6584689e6b5449a044e041b9f6572&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=e5f6584689e6b5449a044e041b9f6572`

}
export default endpoints; 