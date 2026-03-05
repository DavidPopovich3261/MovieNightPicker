import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../store';
import api from '../utils/api';

function Movie() {
    const { id } = useParams()
    const navigate = useNavigate();
    const movies = useStore((state) => state.movies)
    const updatmovies = useStore((state) => state.updatmovies)
    useEffect(() => {
        const fathdata = async () => {
            if (movies[0] == undefined) {
                updatmovies(await api("http://localhost:8080/movies"))
            }
        }
        fathdata()
    }, [])
    return (
        <div>
            {movies["newdata"] && movies["newdata"]
                .filter((item) => item.id == id).
                map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <h3>{item.overview}</h3>
                            <img src={item.posterUrl} alt="" />
                            <p>year :{item.year}</p>
                            <p>time :{item.runtime}</p>
                            <p>imbd :{item.rating}</p>
                            <p>genres :{item.genres.join(" ")}</p>
                        </div>
                    )
                })}
            <button onClick={() => navigate(`seats/${id}`)}>seats</button>
        </div>
    )
}

export default Movie