import React from "react";
import { useState, useEffect } from "react";
import ImageCard from "../../components/imageCard/imageCard";
import { getImages, getMovies } from "../../api";

const All_Top = (props) => {

    const [image_size, setImageSize] = useState() 
    const [base_url, setBaseUrl] = useState()
    const [top_movies, setTopMovies] = useState([])
    const movies = "movie/top_rated"
    let array_movies = []

    useEffect(() =>{
        getImages().then((data) =>{
            setImageSize(data.poster_sizes[5]) //w780
            setBaseUrl(data.secure_base_url) //url com https
        })
        getMovies(movies).then((data) => {
            setTopMovies(data.results)
        })
    },[])
    top_movies.map((movie) => {
        array_movies.push(movie)
    })

    console.log(array_movies)
    
    return(
        <div className=" bg-primary ">
            {array_movies.map((movie) =>  <div className="p-10">

                <ImageCard name={movie.title} id={movie.id} link={base_url+image_size+movie.poster_path} />
            </div> )}
            
        </div>
    )
}

export default All_Top