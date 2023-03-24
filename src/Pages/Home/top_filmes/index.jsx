import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ImageCard from "../../../components/imageCard/imageCard";
import { getImages, getMovies } from "../../../api";


const Top_Filmes = () => {

    const top_movies = "movie/top_rated"
    let array_movies = []
    const [base_url, setBase_url] = useState() 
    const [image_size, setImage_size] = useState() 
    const[top_filmes, setTopFilmes] = useState([])

    useEffect(() =>{

        getImages().then((data) =>{
            setImage_size(data.poster_sizes[5]) //w780
            setBase_url(data.secure_base_url) //url com https
        })
        
        .catch(erro => console.error(erro))

        getMovies(top_movies).then((data) =>{
            setTopFilmes(data.results)
            
        })
    },[])
    
    for(const filme in top_filmes){
        
        array_movies.push(top_filmes[filme])
    }
  
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
                {array_movies.map(movie => <SwiperSlide key={movie.id} ><ImageCard 

                    name ={movie.title} 
                    id={movie.id}
                    key={movie.id}
                    link={base_url + image_size + movie.poster_path} />
                    
                </SwiperSlide> )} 
            </Swiper>
    </div>
    )
}

export default Top_Filmes