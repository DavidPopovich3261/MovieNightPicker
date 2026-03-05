import { create } from 'zustand'

export const useStore = create((set) => ({
    movies: [],
    seatSelections: [],    
    updatseatSelections: ({ id: seat }) => set(({ seatSelections: id = seat })),
    updatmovies: (newmovies) => set(({ movies: newmovies }))
}))