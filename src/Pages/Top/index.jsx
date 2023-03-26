import React from "react";
import { useState, useEffect } from "react";
import ImageCard from "../../components/imageCard/imageCard";
import { randomMovies, getMovies } from "../../api";
import { Refresh } from "../../components/refresh/refresh";

const Top = () => {

    const imageUrl = import.meta.env.VITE_MOVIE_URL_XL
    const [top_movies, setTopMovies] = useState(null)
    const movies = "top_rated"
    const [page, setPage] = useState(1)
    const [bgMovie, setBgMovie] = useState()
    useEffect(() =>{
        
        getMovies(movies).then((data) => {
            setTopMovies(data.results)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
    },[page])
    
    if(top_movies != null){
        return(
            <div className=" grid grid-cols-5 grid-rows-5 bg-fixed w-screen  bg-primary ">
                <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative"> 
                    <img className="fixed w-screen h-fit blur-sm " src={bgMovie} alt="" />
                </div> 
                {top_movies.map((movie) =>  <div className="p-10">
                    <ImageCard name={movie.title} id={movie.id} link={movie.poster_path != null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} typeMovie={movies} />
                </div> )}
            </div>
        )
    }
    else{
        return(
            <Refresh />
        )
    }
}

export default Top