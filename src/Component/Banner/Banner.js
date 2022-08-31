import React, { useEffect, useState } from 'react'
import { API_KEY, IMG_URL } from '../Constants/constants';
import axios from '../../axios'
import './Banner.css'


function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {

    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[0])
      
    })

  }, [])





  return (
    <>
      {movie &&
        <div className='banner' style={{ backgroundImage: `url(${IMG_URL + movie.backdrop_path})` }}>
          <div className='content'>
            <h1 className='title'>{movie.original_title}</h1>
            <div className='banner_button'>
              <button className='button'>Play</button>
              <button className='button'>Mylist</button>
            </div>
            <h1 className='description'>{movie.overview}</h1>
          </div>
          <div className="fade_bottom">

          </div>
        </div >
      }
    </>
  )
}

export default Banner