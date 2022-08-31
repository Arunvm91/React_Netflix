import React from 'react'
import './Rowpost.css'
import axios from '../../axios';
import { API_KEY, IMG_URL } from '../Constants/constants';
import { useState, useEffect } from 'react';


function Rowpost(props) {

    const [poster, Setposter] = useState([]);

    useEffect(() => {

        axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
            Setposter(response.data.results)
            console.log(response.data)
        })

    }, [])

    console.log(props)


    return (

        <div className='row'>
            <h1>{props.name}</h1>
            <div className="posters">
                {
                    poster &&

                    poster.map((posteer, index) => {

                        return (
                            <img className={props.type == "top" ? "poster" : "small-poster"} key={index} src={`${IMG_URL + posteer.backdrop_path}`} alt="Poster Card" />
                        )
                    })

                }

            </div>
        </div>
    )
}

export default Rowpost