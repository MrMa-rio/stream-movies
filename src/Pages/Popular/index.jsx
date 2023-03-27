import React, { useEffect, useState } from "react";
import { getMovies, randomMovies } from "../../api";
import ImageCard from "../../components/imageCard/imageCard";
import { Refresh } from "../../components/refresh/refresh";


const Popular = () => {

    const [popularMovies, setPopularMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const movies = "popular"
    const [page,setPage] = useState(1)
    const [bgMovie, setBgMovie] = useState()
    useEffect(() =>{
        
        getMovies(movies).then((data) => {
            setPopularMovies(data.results)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
    },[page])

    if(popularMovies != null){
        return(
            <div className="grid grid-cols-5 grid-rows-5 bg-fixed w-screen bg-primary">
                <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative"> 
                    <img className="fixed w-screen h-fit blur-sm " src={bgMovie} alt="" />
                </div>
                {popularMovies.map((movie) =>  <div className="p-14">
                    <ImageCard name={movie.title} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} typeMovie={movies} />
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

export default Popular