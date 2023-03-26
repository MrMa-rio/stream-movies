import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
import { 
    getMovies,
 } from "../../../api";
import { Refresh } from "../../../components/refresh/refresh";

const Lancamentos = () => {

    const imageUrl = "https://image.tmdb.org/t/p/original"
    const [upcoming_movies, setUpcomingMovies] = useState(null)                
    const movies = "upcoming"
    
    useEffect(() => { 
        getMovies(movies).then((data) => {
            setUpcomingMovies(data.results)
        })
    },[])
    
    {
        if(upcoming_movies != null){
            return( 
                <div>
                    <h3 className="text-white text-center  font-bold text-3xl p-3 ">Lançamentos</h3>
                    
                    <Swiper
                    
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {upcoming_movies && upcoming_movies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 
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
            return (
                <Refresh />
            )
        }
    }
}

export default Lancamentos




        /* {!data  // Renderezicao condicional
        //     ? (
        //         <div>loading</div>
        //     )
        //     : (
        //         {data.map(()=>{

        //         })}
        //     )

        / }*/