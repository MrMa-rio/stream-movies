import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getResultMovies } from "../../api";
import { Refresh } from "../refresh/refresh";
import {ImageCard} from "../imageCard/imageCard";

export const Search = (props) =>{

    const [text, setText] = useState('');
    const navigate = useNavigate()
    const timeToCallSomething = useRef(null);
    const onChangeHandler = ({ target: { value } }) => {
        setText(value);
    };
    const [searchMovies, setSearchMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const search = useParams()
    const [bgImage, setBgImage] = useState()

    useEffect(() =>{

        if (timeToCallSomething.current) {
            clearInterval(timeToCallSomething.current);
        }
        timeToCallSomething.current = setTimeout(() =>{
            if(text != '' ){
                navigate(`/search/${text}`) 
            }
        }, 2000);
        return () => clearInterval(timeToCallSomething.current);

    },[text])

    useEffect(() =>{
        getResultMovies(search.id).then(data =>{
            setSearchMovies(data.results)
            console.log(data.results)
        } )
    },[search])
    
    if(searchMovies != null){
        return(
            <div className="bg-primary ">
                <div className="w-screen h-fit bg-primary bg-center bg-cover relative">
                    <img className="fixed w-screen h-fit blur-sm  " src={bgImage} alt="" />
                </div>
                <div className="">
                    <div className="grid grid-cols-5 grid-rows-5 bg-fixed w-screen bg-primary">
                        {searchMovies.map((movie) =>  <div  className="p-14 mt-14 ">
                            <div className="hover:transition-all duration-700 p-4" onMouseEnter={e => setBgImage(e.target.src ? e.target.src : '../src/assets/imagens/backgroundImage.jpg')}>
                                <ImageCard  name={movie.title} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} />
                            </div>
                        </div> )}
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className=" fixed top-0 ">
                        <div className="flex justify-center relative items-center p-5 gap-3 bg-primary bg-opacity-60 text-white rounded-xl">
                            <Link to="/"><button className=" relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto" src="../src/assets/imagens/home.png" alt="" /></button></Link>
                            <input onChange={onChangeHandler} className=" relative w-smartphone bg-transparent rounded-lg border-b-black border-t-0 border-l-0 border-r-0 placeholder-black hover:placeholder-white text-center placeholder-opacity-80" placeholder="Pesquise aqui.." type="text" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <Refresh />
        )
    }
}