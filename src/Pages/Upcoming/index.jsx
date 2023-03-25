import React, { useEffect, useState } from "react";
import { getMovies } from "../../api";
import ImageCard from "../../components/imageCard/imageCard";

const Upcoming = () => {

    const [upcoming_movies, setUpcomingMovies] = useState([])
    const imageUrl = import.meta.env.VITE_MOVIE_URL
    const movies = "upcoming"
    const [ page, setPage ] = useState(1);
    
    useEffect(() =>{
        getMovies(movies,page).then((data) => {
            setUpcomingMovies(data.results)
        })
    },[page])
    
    return(
        <div className=" bg-primary ">
            <button className="text-white text-center bg-white" onClick={()=> setPage((prev)=> prev + 1)}>+1</button>
            {upcoming_movies.map((movie) =>  <div className="p-10">

                <ImageCard name={movie.title} id={movie.id} link={imageUrl+movie.poster_path} />
            </div> )}
            
        </div>
    )
}

export default Upcoming