import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import ImageCard from "../../../components/imageCard/imageCard";
import { useEffect, useState } from "react";
import React from "react";


const Popular_Filmes = () =>{

    const api_key = "?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef"
    const url_api = "https://api.themoviedb.org/3/"
    const url_configuration = "configuration"
    const region = "&language=pt-BR"
    const top_movies = "movie/popular"

    let array_movies = []

    const [base_url, setBase_url] = useState() 
    const [image_size, setImage_size] = useState() 
    const [popular_movies, setPopularMovies] = useState()                     
    
    useEffect(() => { 
        fetch(url_api + url_configuration + api_key)
        .then(response => response.json())
        .then(response => response.images)
        .then(response => {
            setImage_size(response.poster_sizes[3]) 
            setBase_url(response.base_url)
            
        })
        .catch(erro => console.error(erro))

        fetch(url_api + top_movies + api_key + region) 
        .then(response => response.json())
        .then(response => response.results)
        .then(response => {
            
            setPopularMovies(response)
        
        })
    },[])
    for(const popular in popular_movies){
        if(array_movies.length <=10){
             array_movies.push(popular_movies[popular])
        }
       
    }
   

    return(
        <div className=" pt-10 h-fit bg-primary">
          <div className="">
                <h2 className=" p-3 text-2xl text-white "> Filmes Populares </h2>
          </div>
          <hr/>
          <div className="h-smartphone sm:h-64 xl:h-80 2xl:h-96  m-11 ">
            
              <Carousel className="h-smartphone w-72 m-auto " slideInterval={5000}>
                {array_movies.map(movie => <ImageCard 

                    name ={movie.title} 
                    key={movie.id}
                    link={base_url+image_size+movie.poster_path} /> )} 
                    
              </Carousel>
            </div>
        </div>
    )
}

export default Popular_Filmes
