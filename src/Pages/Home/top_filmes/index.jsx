import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
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
            setImage_size(response.poster_sizes[5]) 
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
        
        array_movies.push(top_filmes[filme])
        
       
    }
  
    
   
    

    return(
        <div className="">
            <h2 className="text-white font-bold text-right text-4xl pr-6 pt-20 ">Top Filmes</h2>
            <hr className="w-1/2 p-5 ml-auto" />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
        
                navigation={true}
                modules={[Autoplay, Navigation]}
                className=""
            >       
                {array_movies.map(movie => <SwiperSlide><ImageCard 

                    name ={movie.title} 
                    key={movie.id}
                    link={base_url + image_size + movie.poster_path} />
                    
                </SwiperSlide> )} 
            </Swiper>
    </div>
    )
}

export default Top_Filmes