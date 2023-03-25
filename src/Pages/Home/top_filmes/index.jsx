import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
import { getMovies } from "../../../api";

const Top_Filmes = () => {

    const top_movie = "top_rated"
    const imageUrl = import.meta.env.VITE_MOVIE_URL
    const[top_movies, setTopFilmes] = useState([])

    useEffect(() =>{
        getMovies(top_movie).then((data) =>{
            setTopFilmes(data.results)
        })
    },[])
    
    return(
        <div>
            <h3 className="text-white font-bold text-right text-3xl pr-6 pt-20 ">Top Filmes</h3>
            <hr className="w-1/2 p-5 ml-auto" />
            
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}  
                navigation={true}
                modules={[Autoplay, Navigation]}
            >       
                {top_movies.map(movie => <SwiperSlide key={movie.id} ><ImageCard
                    name ={movie.title} 
                    id={movie.id}
                    key={movie.id}
                    link={imageUrl+movie.poster_path} /> 
                </SwiperSlide> )} 
            </Swiper>
        </div>
    )
}
export default Top_Filmes