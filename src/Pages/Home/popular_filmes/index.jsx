import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
// import { imageCard } from "../../../components";
import { 
    getPopularMovies,
    getImages
 } from "../../../api";

import React, { useEffect, useState } from "react";

const Popular_Filmes = () => {

    const api_key = "?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef"
    const url_api = "https://api.themoviedb.org/3/"
    const url_configuration = "configuration"
    const region = "&language=pt-BR"
    const top_movies = "movie/popular"

    let array_movies = []

    const [base_url, setBase_url] = useState() 
    const [image_size, setImage_size] = useState() 
    const [popular_movies, setPopularMovies] = useState();  
    //const [testee, aaa] = useState();                

    
    useEffect(() => { 
        
        getImages().then((response) => {
            setImage_size(response.poster_sizes[5]) 
            setBase_url(response.base_url)
        })

         getPopularMovies().then((data) => {
            setPopularMovies(data.results)
         })
       

        
    },[])
    for(const popular in popular_movies){
        
        array_movies.push(popular_movies[popular])
        
    }
    
    //getBase_URL().then((data) => aaa(data))
    //console.log(testee)
   

    return(

    <div>
        <h2 className="text-white font-bold text-4xl pl-6 pt-6 ">Filmes Populares</h2>
        <hr className="w-1/2 p-5" />
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
            {array_movies.map(movie => <SwiperSlide ><ImageCard 

                    name ={movie.title} 
                    key={movie.id}
                    link={base_url+image_size+movie.poster_path} />
            </SwiperSlide> )} 
      </Swiper>
    </div>
    )
}

export default Popular_Filmes




        /* {!data  // Renderezicao condicional
        //     ? (
        //         <div>loading</div>
        //     )
        //     : (
        //         {data.map(()=>{

        //         })}
        //     )

        / }*/