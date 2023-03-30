import { useState, useEffect } from "react";
import {ImageCard} from "../../components/imageCard/imageCard";
import { randomMovies, getMovies } from "../../api";
import { Link } from "react-router-dom";
import { Page } from "../../components/Pages/Pages";
import { Refresh } from "../../components/refresh/refresh";

export const Top = () => {

    const stepPage = (page) => {
        setPage((prev) => prev + (page))
    }

    const imageUrl = "https://image.tmdb.org/t/p/original"
    const [top_movies, setTopMovies] = useState(null)
    const movies = "top_rated"
    const [page, setPage] = useState(1)
    const [bgMovie, setBgMovie] = useState()
    useEffect(() =>{
        
        getMovies(movies,page).then((data) => {
            setTopMovies(data.results)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
    },[page])
    
    if(top_movies != null){
        return(
            <div className="bg-primary">
                <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative">
                    <img className="fixed w-screen h-fit blur-sm super-small:object-cover super-small:h-screen " src={bgMovie} alt="" />
                </div>

                <div className="pt-10">
                    <div className="flex justify-center gap-2">
                       
                        <Link to="/"><button className="relative block m-auto rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/home.png" alt="" /></button></Link>
                        {page != 1 ? <button onClick={() => stepPage(-1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/arrow_left.png" alt="" /></button> : null}
                            <Page page={page} />
                        {page < 10 ? <button onClick={() => stepPage(+1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/arrow_right.png" alt="" /></button> : null}
                    </div>
                </div>

                <div className=" md:grid md:grid-cols-4 md:grid-rows-6 xl:grid xl:grid-cols-5 xl:grid-rows-5 bg-fixed w-screen  bg-primary ">
                    {top_movies.map((movie) =>  <div className="super-small:p-5 md:p-4 xl:p-14 relative">
                        <ImageCard name={movie.title} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} typeMovie={movies} />
                    </div> )}
                    <Link to="/"><button className="relative block xl:hidden m-auto rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/home.png" alt="" /></button></Link>
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

