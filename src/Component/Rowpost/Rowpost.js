import React from 'react'
import './Rowpost.css'
import axios from 'axios';
import { useState, useEffect } from 'react';


function Rowpost() {

    const [poster, Setposter] = useState([]);


    // useEffect(() => {

    //     axios.get("https://api.themoviedb.org/3/discover/movie?api_key=0b8aaf176e25bd1f5061399efbd04d47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate").then((response) => {
    //         Setposter(response.data);
    //         console.log(poster)
    //     })


    // }, [])



    return (

        <div className='row'>
            <h1>Title </h1>
            <div className="posters">
                {
                    // poster &&

                    // poster.map((posteer, index) => {

                    //     return (
                    //         <img className='poster' key={index} src={posteer.backdrop_path} alt="Poster Card" />
                    //     )
                    // })

                }

            </div>
        </div>
    )
}

export default Rowpost