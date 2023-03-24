
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImageCard from "../components/imageCard/imageCard";
// Import Swiper styles
import "swiper/css";




// import required modules
import { Autoplay, Navigation } from "swiper";


export default function Apps() {
    const api_key = "?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef"
    const url_api = "https://api.themoviedb.org/3/"
    const url_configuration = "configuration"
    const region = "&language=pt-BR"
    const top_movies = "movie/popular"

    let array_movies = []

    const [base_url, setBase_url] = useState() 
    const [image_size, setImage_size] = useState() 
    const [popular_movies, setPopularMovies] = useState();  
    const [movies, setMovies] = useState(null)                     

    
    useEffect(() => { 
        /*getPopularMovies().then((data)=>{
            setMovies(data);
        }).catch(console.log)*/

        fetch(url_api + url_configuration + api_key)
        .then(response => response.json())
        .then(response => response.images)
        .then(response => {
            setImage_size(response.poster_sizes[5]) 
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
  return (
    <div>
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
  );
}
