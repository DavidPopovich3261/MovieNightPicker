import { json } from "stream/consumers";

export function Filtervalues(data) {
    const newdata = JSON.parse(data).map((item) => {
        console.log(item);
        return {
            id: item.imdbID,
            title: item.Title,
            year: item.Year,
            rating: item.imdbRating,
            runtime: item.Runtime,
            genres: item.Genre.split(", "),
            overview: item.Plot,
            posterUrl: item.Poster,
            Language: item.Language
        }
    })
    return newdata
}