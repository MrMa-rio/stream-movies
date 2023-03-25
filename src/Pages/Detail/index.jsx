import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../../api";

export default function Detail(){

    const movie_id = useParams()
    const [imageMovie, setImageMovie] = useState()
    const [overView, setOverView] = useState()
    const [title, setTitle] = useState()
    const imageUrl = import.meta.env.VITE_MOVIE_URL

    getDetailsMovie(movie_id.id).then((data) =>{
        setImageMovie(data.poster_path)
        setOverView(data.overview)
        setTitle(data.title)
    })
    /*
        Nessa funçao voce ira fazer com que a pagina se torne dinamica 
        ao clicar em um filme.
        Nela ira conter a foto do filme, nome, data de lancamento, avaliaçaõ IMDB
        sinopse, trailer, como dito tem que ser uma unica pagina que ira fornecer essas informaçoes
     */


    return(
        <div className="bg-primary">
            
            <h1 className="text-white text-3xl font-roboto font-semibold p-4 text-left">{title}</h1>
            <div className="w-80 m-auto">
                <img className="rounded-2xl border" src={imageUrl+imageMovie} alt="" />
                <div className="flex justify-between">
                    <p>1</p>
                    <p>2</p>
                </div>
            </div>
            <h2 className="text-white font-semibold text-2xl pt-8 pl-5">SINOPSE:</h2>
            <div>
                <p className="text-justify p-14 text-white text-lg">{overView}</p>
            </div>

        </div>
    )
}