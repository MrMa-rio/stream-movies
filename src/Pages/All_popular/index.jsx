import React, { useEffect, useState } from "react";
import { getImages, getMovies } from "../../api";
import ImageCard from "../../components/imageCard/imageCard";

const All_Popular = () => {

    const [image_size, setImage_size] = useState() 
    const [base_url, setBase_url] = useState()
    const [popular_movies, setPopularMovies] = useState([])
    const movies = "movie/popular"
    let array_movies = []

    useEffect(() =>{
        getImages().then((data) =>{
            setImage_size(data.poster_sizes[5]) //w780
            setBase_url(data.secure_base_url) //url com https
        })
        getMovies(movies).then((data) => {
            setPopularMovies(data.results)
        })
    },[])
    popular_movies.map((movie) => {
        array_movies.push(movie)
    })
    console.log(array_movies)

    
    /*
        Nessa funçao voce ira fazer com que a pagina se torne dinamica 
        ao clicar na opcao POPULARES.
        Nela ira conter 20 filmes de amostra com nome,data,avaliação
     */
    return(
        <div className=" bg-primary ">
            {array_movies.map((movie) =>  <div className="p-10">

                <ImageCard name={movie.title} id={movie.id} link={base_url+image_size+movie.poster_path} />
            </div> )}
            
        </div>
    )
}

export default All_Popular