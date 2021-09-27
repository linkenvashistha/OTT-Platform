import axios from "./axios";
import React,{useEffect,useState} from "react";
import requests from "./requests";
import "./Banner.css";

function Banner(){
  const [movie,setMovie] = useState([])

  useEffect(()=>{
   async function fetchData(){
    const req = await axios.get(`${requests.fetchTopRated}`)
    setMovie(req.data.results[Math.floor(Math.random()*req.data.results.length-1)])
    return req;
   }
   fetchData()
  },[])
  console.log(movie)
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='banner-content'>
        <h1 
        className='banner-title'
        onClick={
          ()=>{
            if (movie.media_type) {
              window.open(
                `https://www.themoviedb.org/${movie.media_type}/${movie.id}`,
                '_blank'
              )
            } else {
              window.open(
                `https://www.themoviedb.org/movie/${movie.id}`,
                '_blank'
              )
            }
          }
        }
        >{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>List</button>
        </div>
        <div className='banner-overview'>{movie.overview}</div>
      </div>
    </header>
  )
}

export default Banner