import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../store';
import api from '../utils/api';

function Seats() {
    const { id } = useParams()
    const seatSelections = useStore((state) => state.seatSelections)
    const updatseatSelections = useStore((state) => state.updatseatSelections)
    useEffect(() => {
        const fathdata = async () => {
            if (seatSelections[0] == undefined) {
                updatseatSelections(await api("http://localhost:8080/purchases"))
            }
        }
        fathdata()
    }, [])
    return (
        <div>{seatSelections["purchases"] && seatSelections["purchases"][id].map((item) => {
            <p>{item.id}</p>
        })}</div>
    )
}

export default Seats