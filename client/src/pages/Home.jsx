import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { useStore } from '../store'
import { useNavigate } from "react-router-dom";

function Home() {
    const [value, setValue] = useState("")
    const movies = useStore((state) => state.movies)
    const updatmovies = useStore((state) => state.updatmovies)
    const navigate = useNavigate();

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
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <div className='grids'>{movies["newdata"] && movies["newdata"].
                filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.genres.join(" ").toLowerCase().includes(value.toLowerCase())).
                map((item) => {
                    return (
                        <div className='m' key={item.id} onClick={() => navigate(`movie/${item.id}`)}>
                            <h1>{item.title}</h1>
                            <img src={item.posterUrl} alt="" />
                            <p>Year {item.year}</p>
                            <p>imbd:{item.rating}</p>
                        </div>
                    )
                })}</div>
        </div>
    )
}

export default Home