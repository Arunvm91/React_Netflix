import React from 'react'
import './Rowpost.css'
import axios from 'axios';
import { useState, useEffect } from 'react';


function Rowpost() {

    const [poster, setposter] = useState(0);

    useEffect(() => {

        console.log('i fire once');

        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((response) => {
            setposter(response.data)
        })
    }, []);


    return (

        <div className='row'>
            <h1>Title </h1>
            <div className="posters">
                {
                  
                    poster && (
                        
                        poster.map((posteer, index) => {
                            
                            return (
                                <img className='poster' key={index} src={posteer.url} alt="Poster Card" />
                            )
                        })
                    )
                }


            </div>
        </div>
    )
}

export default Rowpost