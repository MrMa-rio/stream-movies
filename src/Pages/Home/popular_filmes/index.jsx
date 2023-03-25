import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
import { getMovies } from "../../../api";

const Popular_Filmes = () => {

    const imageUrl = import.meta.env.VITE_MOVIE_URL
    const [popularMovies, setPopularMovies] = useState([]);                  
    const movies = "popular"
    
    useEffect(() => { 
        
        getMovies(movies).then((data) => {
            setPopularMovies(data.results)
        })
    },[])
    
    return(

    <div>
        <h3 className="text-white font-bold text-3xl pl-6 pt-6 ">Filmes Populares</h3>
        <hr className="w-1/2 p-5" />
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
            {popularMovies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 
                    name={movie.title} 
                    key={movie.id}
                    id={movie.id}
                    link={imageUrl+movie.poster_path} />
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