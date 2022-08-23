import React from 'react'
import './Banner.css'
import axios from 'axios'

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movice Name</h1>
        <div className='banner_button'>
          <button className='button' onClick={() => {
            axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((response) => {
              
              console.log(response.data)
            })
          }}
          >Play</button>
          <button className='button'>Mylist</button>
        </div>
        <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div >
  )
}

export default Banner