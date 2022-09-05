import React from 'react'
import './Rowpost.css'
import axios from '../../axios';
import { IMG_URL, API_KEY } from '../Constants/constants';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';


function Rowpost(props) {

    const [poster, Setposter] = useState([]);
    const [videourl, Setvideourl] = useState('');

    useEffect(() => {

        axios.get(props.url).then((response) => {
            Setposter(response.data.results)
        })

    }, [])

    const clickhandle = (movie_id) => {

        axios.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {

            response.data.results.length !== 0 &&
                Setvideourl(response.data.results[0].key)

        }).catch((response) => {
            console.log(response)

        })

    }


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        },
    };

    return (

        <div className='row'>
            <h1>{props.name}</h1>
            <div className="posters">
                {
                    poster &&

                    poster.map((posteer, index) => {

                        return (
                            <div key={index}>
                                <img onClick={() => clickhandle(posteer.id)} className={props.type ? "poster" : "small-poster"} key={index} src={`${IMG_URL + posteer.backdrop_path}`} alt="Poster Card" />
                            </div>
                        )
                    })
                }
            </div>

            {videourl &&

                <YouTube videoId={videourl} opts={opts} />

            }

        </div>
    )
}

export default Rowpost