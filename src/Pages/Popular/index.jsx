import React, { useEffect, useState } from "react";
import { getMovies } from "../../api";
import ImageCard from "../../components/imageCard/imageCard";

const Popular = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const imageUrl = import.meta.env.VITE_MOVIE_URL
    const movies = "popular"
    const [page,setPage] = useState(1)
    useEffect(() =>{
        
        getMovies(movies).then((data) => {
            setPopularMovies(data.results)
        })
    },[page])

    return(
        <div className=" bg-primary ">
            
            {popularMovies.map((movie) =>  <div className="p-10">
                <ImageCard name={movie.title} id={movie.id} link={imageUrl + movie.poster_path} typeMovie={movies} />
            </div> )}
            
        </div>
    )
}

export default Popular