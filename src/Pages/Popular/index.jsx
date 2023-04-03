import { useEffect, useState } from "react";
import { getMovies, randomMovies } from "../../api";
import {ImageCard, Refresh } from "../../components/index";
import { Link } from "react-router-dom";
import Home from "../../assets/imagens/home.png"
import ArrowLeft from "../../assets/imagens/arrow_left.png"
import ArrowRight from "../../assets/imagens/arrow_right.png"
import NoImage from "../../assets/imagens/no_image.png"

export const Popular = () => {

    const  stepPage = (page) => {
        setPage((prev) => prev + (page))
    }
    const [popularMovies, setPopularMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const movies = "popular"
    const [page,setPage] = useState(1)
    const [bgMovie, setBgMovie] = useState()
    const [stepPrim, setStepPrim] = useState(page)
    const [stepSec, setStepSec] = useState(page)
    const [stepTerc,setStepTerc] = useState(page)
    const maxPage = 10
    useEffect(() =>{
        
        getMovies(movies,page).then((data) => {
            setPopularMovies(data.results)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
        setStepPrim(page+1 < 8 ? page+1 : 8 )
        setStepSec(page+2 < maxPage ? page+2 : 9 )
        setStepTerc(page+3 < maxPage ? page+3 : maxPage )
    },[page])
    
    if(popularMovies != null){
        return(
            <div className="bg-primary">
                <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative">
                    <img className="fixed w-screen h-fit blur-sm super-small:object-cover super-small:h-screen " src={bgMovie} alt="" />
                </div>
                <div className="pt-10">
                    <div className="flex justify-center gap-2">
                        <Link to="/"><button className="relative block m-auto rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={Home} alt="" /></button></Link>
                        {page != 1 ? <button onClick={() => stepPage(-1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={ArrowLeft} alt="" /></button> : null}
                        <div className="flex justify-center gap-2">
                            {page == 1 || page > 1 && page <= maxPage ? <button onClick={()=>setPage(stepPrim)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepPrim}</button> : null}
                            {page == 1 || page > 1 ?  <button onClick={()=>setPage(stepSec)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepSec}</button> : null}
                            {page == 1 || page > 1 ? <button onClick={()=>setPage(stepTerc)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepTerc}</button> : null}
                        </div>
                        {page < 10 ? <button onClick={() => stepPage(+1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={ArrowRight} alt="" /></button> : null}
                    </div>
                </div>
                <div className="md:grid md:grid-cols-4 md:grid-rows-6 xl:grid xl:grid-cols-5 xl:grid-rows-5 bg-fixed w-screen bg-primary">
                    {popularMovies.map((movie) =>  <div key={movie.id+1} className=" super-small:p-5 md:p-4 xl:p-14 relative">
                        <ImageCard name={movie.title} key={movie.id} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : NoImage} typeMovie={movies} />
                    </div> )}
                    <Link to="/"><button className="relative block xl:hidden m-auto rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={Home} alt="" /></button></Link>
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