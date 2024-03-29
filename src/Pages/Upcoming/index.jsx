import { useEffect, useState } from "react";
import { getMovies,randomMovies } from "../../api";
import { ImageCard, Refresh, SearchTextRelative, Page } from "../../components/index";
import { Link } from "react-router-dom";
import Home from "../../assets/imagens/home.png"
import NoImage from "../../assets/imagens/no_image.png"

export const Upcoming = () => {

    const stepPage = (page)=>{
        setPage((prev) => prev + (page))
    }
    const [upcoming_movies, setUpcomingMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const movies = "upcoming"
    const [ page, setPage ] = useState(1);
    const [bgMovie, setBgMovie] = useState(null)
    const [maxPage, setMaxPage] = useState(null)
    useEffect(() =>{
        getMovies(movies,page).then((data) => {
            setUpcomingMovies(data.results)
            setMaxPage(data.total_pages > 30 ? 30 : data.total_pages)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
    },[page])

    if(upcoming_movies != null){
        return(
            <div className="bg-primary">
                <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative">
                    <img className="fixed w-screen h-fit blur-sm super-small:object-cover super-small:h-screen " src={bgMovie && bgMovie != null ? bgMovie : NoImage} alt="" />
                </div>
                <div className="pt-10">
                    <SearchTextRelative />
                    <Page stepPage={stepPage} maxPage={maxPage} setPage={setPage} page={page}  />
                </div>
                <div className="md:grid md:grid-cols-4 md:grid-rows-6 xl:grid xl:grid-cols-5 xl:grid-rows-5 bg-primary bg-fixed w-screen ">
                    {upcoming_movies.map((movie) =>  <div key={movie.id+1} className="super-small:p-5 md:p-4 xl:p-14 relative">
                        <ImageCard name={movie.title} key={movie.id} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : NoImage} />
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