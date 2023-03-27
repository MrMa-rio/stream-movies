import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResultMovies } from "../../api";
import { Refresh } from "../refresh/refresh";
import ImageCard from "../imageCard/imageCard";

export const Search = (props) =>{
    const [searchMovies, setSearchMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    
    const [page,setPage] = useState(1)
    const search = useParams()
    
    useEffect(() =>{

        getResultMovies(search.id).then(data =>{
            setSearchMovies(data.results)
            console.log(data.results)
        } )

    },[])
    
   

    if(searchMovies != null){
        return(
            <div className="grid grid-cols-5 grid-rows-5 bg-fixed w-screen bg-primary">
                <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative"> 
                   {/* <img className="fixed w-screen h-fit blur-sm " src={bgMovie} alt="" />*/}
                </div>
                {searchMovies.map((movie) =>  <div className="p-14">
                    <ImageCard name={movie.title} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} />
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