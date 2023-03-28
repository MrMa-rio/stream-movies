import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailsMovie } from "../../api";


export default function Detail(){

    const movie_id = useParams()
    const [imageMovie, setImageMovie] = useState(null)
    const [imageBg, setImageBg] = useState(null)
    const [overView, setOverView] = useState()
    const [title, setTitle] = useState()
    const [genres, setGenres] = useState([])
    const [average, setAverage] = useState(0.0)
    const [date, setDate] = useState()
    const imageUrl = "https://image.tmdb.org/t/p/w1280"

    useEffect(() =>{
        getDetailsMovie(movie_id.id).then((data) =>{
            setImageMovie(data.poster_path)
            setImageBg(data.backdrop_path)
            setOverView(data.overview)
            setTitle(data.title)
            setGenres(data.genres)
            setAverage(data.vote_average)
            setDate(data.release_date.substring(0,4))
        })
    },[])
    
    /*
        Nessa funçao voce ira fazer com que a pagina se torne dinamica 
        ao clicar em um filme.
        Nela ira conter a foto do filme, nome, data de lancamento, avaliaçaõ IMDB
        sinopse, trailer, como dito tem que ser uma unica pagina que ira fornecer essas informaçoes
     */


    return(
        <div className=" flex justify-center items-center bg-primary w-screen h-screen ">
            <img className="absolute w-screen blur-sm" src={imageUrl+imageBg} alt="" />
            
            <div className="flex items-center  justify-between p-24 relative bg-zinc-800 w-fit bg-opacity-20 rounded-xl">
                <div>
                    <div className="bg-zinc-900 rounded-xl bg-opacity-20 p-10">
                        <div className="flex justify-between rounded-t-xl bg-zinc-900 bg-opacity-60 p-10 text-white">
                            <div>
                                <div className="flex gap-3 p-3 pl-1 rounded-xl" >
                                   {genres.map(result => <p className="bg-zinc-900 bg-opacity-60 rounded-sm p-1">{result.name.toUpperCase()}</p>)}
                                
                                </div>
                                <p className=" bg-zinc-800 bg-opacity-60 p-1 font-roboto rounded-md">LANÇAMENTO: {date}</p>
                            </div>
                            <div>
                                <p className="p-2 bg-yellow-400 bg-opacity-20 rounded-xl ">Avaliação: {average.toFixed(1)}</p>
                            </div>
                        </div>
                        <div className=" bg-zinc-900 bg-opacity-40 p-3 rounded-b-xl">
                            <h1 className="text-white text-3xl max-w-screen-sm font-roboto font-semibold p-4 text-left">{title}</h1>
                            <h2 className="text-white font-semibold text-2xl pt-8 pl-5">SINOPSE:</h2>
                            <div className="w-smartphone h-  rounded-xl">
                                <p className="text-justify p-10 text-white text-lg w-full h-40 overflow-scroll">{overView}</p>
                            </div>
                        </div>
                    
                    </div>
                    <div className="flex gap-4 text-white font-bold mt-5 ">
                        <button className=" rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-28 h-9 hover:transition-all duration-200 hover:text-lg hover-">VER TRAILER</button>
                        <Link to="/"><button className=" rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-28 h-9 hover:transition-all duration-200 hover:text-lg hover-">HOME</button></Link>
                    </div>
                </div>
                
                <img className="  w-96 rounded-xl ml-14 " src={imageMovie != null ? imageUrl + imageMovie : '../src/assets/imagens/no_image_md.png'} alt="" />
            </div>
        </div>
    )
}