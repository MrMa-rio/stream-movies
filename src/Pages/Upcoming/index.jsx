import React, { useEffect, useState } from "react";
import { getMovies,randomMovies } from "../../api";
import ImageCard from "../../components/imageCard/imageCard";
import { Refresh } from "../../components/refresh/refresh";

const Upcoming = () => {

    const [upcoming_movies, setUpcomingMovies] = useState(null)
    const imageUrl = import.meta.env.VITE_MOVIE_URL_XL
    const movies = "upcoming"
    const [ page, setPage ] = useState(1);
    const [bgMovie, setBgMovie] = useState()
    useEffect(() =>{
        getMovies(movies,page).then((data) => {
            setUpcomingMovies(data.results)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
    },[page])
    
    if(upcoming_movies != null){
       return(
        <div className="grid grid-cols-5 grid-rows-5 bg-primary bg-fixed w-screen ">
            <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative"> 
                <img className="fixed w-screen h-fit blur-sm " src={bgMovie} alt="" />
            </div>
            {/*<button className="relative text-white text-center bg-white" onClick={()=> setPage((prev)=> prev + 1)}>+1</button>*/}
            {upcoming_movies.map((movie) =>  <div className="">
                <ImageCard name={movie.title} id={movie.id} link={movie.poster_path != null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} />
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

export default Upcoming

