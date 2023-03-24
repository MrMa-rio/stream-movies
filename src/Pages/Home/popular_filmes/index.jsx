import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
import { 
    getMovies,
    getImages
 } from "../../../api";



const Popular_Filmes = () => {


    let array_movies = []
    const [base_url, setBase_url] = useState() 
    const [image_size, setImage_size] = useState() 
    const [popular_movies, setPopularMovies] = useState();                  
    const movies = "movie/popular"
    
    useEffect(() => { 
        
        getImages().then((response) => {
            setImage_size(response.poster_sizes[5]) //w780
            setBase_url(response.secure_base_url) //url com https
        })

        getMovies(movies).then((data) => {
            setPopularMovies(data.results)
        })
    },[])
    for(const popular in popular_movies){
        
        array_movies.push(popular_movies[popular])
        
    }
    
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
            {array_movies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 
                    name={movie.title} 
                    key={movie.id}
                    id={movie.id}
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