import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResultMovies } from "../../api";
import {ImageCard, Refresh, SearchTextFixed} from "../index";
import { NotFound } from "../../Pages/NotFound/NotFound";
import BackgroundImage from '../../assets/imagens/backgroundImage.jpg'
import NoImage from '../../assets/imagens/no_image.png'

export const Search = () =>{

    const [searchMovies, setSearchMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const search = useParams()
    const [bgImage, setBgImage] = useState(null)
    

    useEffect(() =>{
        getResultMovies(search.id).then(data =>{
            setSearchMovies(data.results)
        } )
    },[search])
    
    
    if(searchMovies != null && Object.keys(searchMovies).length > 0){
        return(
            <div className="bg-primary ">
                <div className="w-screen h-fit bg-primary bg-center bg-cover relative">
                    <img className="fixed w-screen h-fit blur-sm super-small:object-cover super-small:h-screen " src={bgImage ? bgImage : BackgroundImage } alt="" />
                </div>
                <div>
                    <div className="xl:grid xl:grid-cols-5 xl:grid-rows-5 pt-20 xl:p-0 bg-fixed w-screen bg-primary">
                        {searchMovies.map((movie) =>  <div key={movie.id} className="p-14 xl:mt-14 relative ">
                            <div className="hover:transition-all duration-700 p-4" onMouseEnter={e => setBgImage(e.target.src ? e.target.src : BackgroundImage)}>
                                <ImageCard  name={movie.title} id={movie.id} prev={search.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : NoImage} />
                            </div>
                        </div> )}
                    </div>
                </div>
                <SearchTextFixed />
            </div>
        )
    }
    else{
        if(searchMovies != null && Object.keys(searchMovies).length == 0){
            return(
                <NotFound />
            )
        }
        else{
            return(
                <Refresh />
            )    
        }
    }
}