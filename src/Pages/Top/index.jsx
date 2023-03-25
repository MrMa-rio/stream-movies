import React from "react";
import { useState, useEffect } from "react";
import ImageCard from "../../components/imageCard/imageCard";
import { getImages, getMovies } from "../../api";

const Top = () => {

    const imageUrl = import.meta.env.VITE_MOVIE_URL
    const [top_movies, setTopMovies] = useState([])
    const movies = "top_rated"
    const [page, setPage] = useState(1)
    useEffect(() =>{
        
        getMovies(movies).then((data) => {
            setTopMovies(data.results)
        })
    },[])
    
    return(
        <div className=" bg-primary ">
            {top_movies.map((movie) =>  <div className="p-10">

                <ImageCard name={movie.title} id={movie.id} link={imageUrl+movie.poster_path} typeMovie={movies} />
            </div> )}
            
        </div>
    )
}

export default Top