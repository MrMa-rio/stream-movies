import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getDetailsMovie, getImages } from "../../api";

export default function Detail(){

    const movie_id = useParams()
    const [imageMovie, setImageMovie] = useState()
    const [overView, setOverView] = useState()
    const [title, setTitle] = useState()
    const [image_size, setImage_size] = useState()
    const [base_url, setBase_url] = useState()
    getDetailsMovie(movie_id.id).then((data) =>{
        setImageMovie(data.poster_path)
        setOverView(data.overview)
        setTitle(data.title)
    })
    getImages().then((data) =>{
        
        setImage_size(data.poster_sizes[5]) //w780
        setBase_url(data.secure_base_url) //url com https

    })
        



    return(
        <div className="bg-primary">
            
            <h1 className="text-white text-3xl font-roboto font-semibold p-4 text-left">{title}</h1>
            <div className="w-80 m-auto">
                <img className="rounded-2xl border" src={base_url + image_size + imageMovie} alt="" />
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