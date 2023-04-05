import { useState, useEffect } from "react";
import {ImageCard, Refresh, SearchTextRelative, Page} from "../../components/index";
import { randomMovies, getMovies } from "../../api";
import { Link } from "react-router-dom";
import Home from "../../assets/imagens/home.png"
import NoImage from "../../assets/imagens/no_image.png"

export const Top = () => {

    const stepPage = (page) => {
        setPage((prev) => prev + (page))
    }
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const [top_movies, setTopMovies] = useState(null)
    const movies = "top_rated"
    const [page, setPage] = useState(1)
    const [bgMovie, setBgMovie] = useState()
    const [maxPage, setMaxPage] = useState(null)
    useEffect(() =>{
        
        getMovies(movies,page).then((data) => {
            setTopMovies(data.results)
            setMaxPage(data.total_pages > 30 ? 30 : data.total_pages)
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
                    <SearchTextRelative />
                    <Page stepPage={stepPage} maxPage={maxPage} setPage={setPage} page={page}  />
                </div>
                <div className=" md:grid md:grid-cols-4 md:grid-rows-6 xl:grid xl:grid-cols-5 xl:grid-rows-5 bg-fixed w-screen  bg-primary ">
                    {top_movies.map((movie) =>  <div key={movie.id+1} className="super-small:p-5 md:p-4 xl:p-14 relative">
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

