import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import ImageCard from "../../../components/imageCard/imageCard";


const Top_Filmes = () => {

    const url = "https://api.themoviedb.org/3/"
    const api_key = "?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef"
    const url_configuration = "configuration"
    const region = "&language=pt-BR"
    const top_movies = "movie/top_rated"

    let array_movies = []
    const [base_url, setBase_url] = useState() 
    const [image_size, setImage_size] = useState() 
    const[top_filmes, setTopFilmes] = useState()

    useEffect(() =>{

        fetch(url + url_configuration + api_key)
        .then(response => response.json())
        .then(response => response.images)
        .then(response => {
            setImage_size(response.poster_sizes[3]) 
            setBase_url(response.base_url)
            
        })
        .catch(erro => console.error(erro))


        fetch(url + top_movies + api_key + region)
        .then(response => response.json())
        .then(response => response.results)
        
        .then(response => {
            setTopFilmes(response)
            
        },)
        .catch(error => console.error(error))
        
    },[])
    for(const filme in top_filmes){
        if(array_movies.length <= 10){
            array_movies.push(top_filmes[filme])
        }
       
    }
  
    
   
    

    return(
        <div className="  h-screen  bg-primary">
            <div>
                <h2 className=" p-3 text-2xl text-white ">Top Filmes</h2>
            </div>
            <hr/>
            <div className="h-smartphone sm:h-64 xl:h-80 2xl:h-96 m-11 ">
                <Carousel className="h-smartphone w-72 m-auto " slideInterval={5000}>
                {array_movies.map(movie =>  <ImageCard 

                    name ={movie.title} 
                    key={movie.id}
                    link={base_url + image_size + movie.poster_path} /> 
                )} 
                </Carousel>
            </div>
        </div>
    )
}

export default Top_Filmes