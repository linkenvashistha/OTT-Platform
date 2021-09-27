import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
const base_url = 'http://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl)
      setMovies(req.data.results)
      console.log(req)
      return req
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>{
              if(movie.media_type){
                window.open(`https://www.themoviedb.org/${movie.media_type}/${movie.id}`, '_blank')
              }
              else{
                window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank')
              }
            }}
            className={`row-poster ${isLarge && 'row-posterLarge'}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            ></img>
        ))}
      </div>
    </div>
  )
}

export default Row
