import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
import { 
    getMovies,
 } from "../../../api";



const Lancamentos = () => {

    const imageUrl = import.meta.env.VITE_MOVIE_URL
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
                <h3 className="text-white font-bold text-3xl pl-6 pt-6">Lançamentos</h3>
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
                    {upcoming_movies && upcoming_movies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 
                        name={movie.title}
                        key={movie.id}
                        id={movie.id}
                        link={imageUrl+movie.poster_path} />
                    </SwiperSlide> )} 
                </Swiper>
        </div>
        )
        } else {
            return (
                <h1>asdasasd</h1>
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