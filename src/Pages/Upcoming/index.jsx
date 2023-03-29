import { useEffect, useState } from "react";
import { getMovies,randomMovies } from "../../api";
import { ImageCard } from "../../components/imageCard/imageCard";
import { Refresh } from "../../components/refresh/refresh";
import { Page } from "../../components/Pages/Pages";
import { Link } from "react-router-dom";

export const Upcoming = () => {

    const stepPage = (page)=>{
        setPage((prev) => prev + (page))
    }

    const [upcoming_movies, setUpcomingMovies] = useState(null)
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const movies = "upcoming"
    const [ page, setPage ] = useState(1);
    const [bgMovie, setBgMovie] = useState(null)
    useEffect(() =>{
        getMovies(movies,page).then((data) => {
            setUpcomingMovies(data.results)
        })
        randomMovies().then((data) => {
            setBgMovie(data)
        })
    },[page])
    
    if(upcoming_movies != null){
       return(
        <div className="bg-primary">
            <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative">
                <img className="fixed w-screen h-fit blur-sm super-small:object-cover super-small:h-screen " src={bgMovie && bgMovie != null ? bgMovie : '../src/assets/imagens/no_image.png'} alt="" />
            </div>

            <div className="pt-10">
                    <div className="flex justify-center gap-2">
                       
                        <Link to="/"><button className="relative block m-auto rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/home.png" alt="" /></button></Link>
                        {page != 1 ? <button onClick={() => stepPage(-1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/arrow_left.png" alt="" /></button> : null}
                         <Page page={page} />
                        {page < 10 ? <button onClick={() => stepPage(+1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src="../src/assets/imagens/arrow_right.png" alt="" /></button> : null}
                    </div>
                </div>

            <div className="xl:grid xl:grid-cols-5 xl:grid-rows-5 bg-primary bg-fixed w-screen ">
                {/*<button className="relative text-white text-center bg-white" onClick={()=> setPage((prev)=> prev + 1)}>+1</button>*/}
                {upcoming_movies.map((movie) =>  <div className="p-14 relative">
                    <ImageCard name={movie.title} id={movie.id} link={movie.poster_path && movie.poster_path !=null ? imageUrl + movie.poster_path : '../src/assets/imagens/no_image.png'} />
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



