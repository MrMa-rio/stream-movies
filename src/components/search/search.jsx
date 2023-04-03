import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getResultMovies } from "../../api";
import {ImageCard, Refresh} from "../index";
import { NotFound } from "../../Pages/NotFound/NotFound";
import BackgroundImage from '../../assets/imagens/backgroundImage.jpg'
import NoImage from '../../assets/imagens/no_image.png'
import imageHome from '../../assets/imagens/home.png'

export const Search = () =>{

    const [text, setText] = useState('');
    const navigate = useNavigate()
    const timeToCallSomething = useRef(null);
    const onChangeHandler = ({ target: { value } }) => {
        setText(value.trim().length === 0 ? '' : value);
    };
    const [searchMovies, setSearchMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const search = useParams()
    const [bgImage, setBgImage] = useState(null)
    
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
        } )
    },[search])
    
    
    if(searchMovies != null && Object.keys(searchMovies).length > 0){
        return(
            <div className="bg-primary ">
                <div className="w-screen h-fit bg-primary bg-center bg-cover relative">
                    <img className="fixed w-screen h-fit blur-sm super-small:object-cover super-small:h-screen " src={bgImage ? bgImage : BackgroundImage } alt="" />
                </div>
                <div>
                    <div className="xl:grid xl:grid-cols-5 xl:grid-rows-5 pt-20 xl:p-0 bg-fixed w-screen bg-primary">
                        {searchMovies.map((movie) =>  <div key={movie.id} className="p-14 xl:mt-14 relative ">
                            <div className="hover:transition-all duration-700 p-4" onMouseEnter={e => setBgImage(e.target.src ? e.target.src : BackgroundImage)}>
                                <ImageCard  name={movie.title} id={movie.id} prev={search.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : NoImage} />
                            </div>
                        </div> )}
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className=" fixed top-0 ">
                        <div className="flex justify-center top-3  relative items-center xl:p-5 super-small:p-3 super-small:w-screen xl:w-fit gap-3 bg-primary bg-opacity-60 text-white rounded-xl">
                            <Link to="/"><button className=" relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto" src={imageHome} alt="" /></button></Link>
                            <input onChange={onChangeHandler} className=" relative w-smartphone bg-transparent rounded-lg border-b-black border-t-0 border-l-0 border-r-0 placeholder-white text-center placeholder-opacity-80" placeholder="Pesquise aqui.." type="text" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        if(searchMovies != null && Object.keys(searchMovies).length == 0){
            return(
                <NotFound />
            )
        }
        else{
            return(
                <Refresh />
            )    
        }
    }
}