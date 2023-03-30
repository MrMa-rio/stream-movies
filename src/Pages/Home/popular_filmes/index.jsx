import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import {ImageCard} from "../../../components/imageCard/imageCard";
import { getMovies } from "../../../api";
import { Refresh } from "../../../components/refresh/refresh";

 export const Popular_Filmes = () => {

    const imageUrl = "https://image.tmdb.org/t/p/original"
    const [popularMovies, setPopularMovies] = useState(null);        
    const movies = "popular"
    
    useEffect(() => { 
        
        getMovies(movies).then((data) => {
            setPopularMovies(data.results)
        })
    },[])
    
        {if(popularMovies != null){
            return(
                <div>
                    <h3 className="text-white text-center font-bold text-3xl p-3 ">Filmes Populares</h3>
                    <Swiper
                    className="md:hidden xl:block"
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {popularMovies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 
                                name={movie.title} 
                                key={movie.id}
                                id={movie.id}
                                link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} />
                        </SwiperSlide> )} 
                    </Swiper>
                    <Swiper
                        className="super-small:hidden md:block xl:hidden"
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {popularMovies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 
                                name={movie.title} 
                                key={movie.id}
                                id={movie.id}
                                link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} />
                        </SwiperSlide> )} 
                    </Swiper>
                    
                </div>
            )
        }
        else{
            return(
                <Refresh />
            )
        }
    }
}

