import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailsMovie } from "../../api";


export const Detail = () => {

    const movie_id = useParams()
    const [imageMovie, setImageMovie] = useState(null)
    const [imageBg, setImageBg] = useState(null)
    const [overView, setOverView] = useState()
    const [title, setTitle] = useState()
    const [genres, setGenres] = useState([])
    const [average, setAverage] = useState(0.0)
    const [date, setDate] = useState()
    const imageUrl = "https://image.tmdb.org/t/p/w1280"
    console.log(movie_id)
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
    
    return(
        <div className=" xl:flex xl:justify-center xl:items-center bg-primary w-screen h-screen ">
            <img className="xl:absolute super-small:fixed w-screen blur-sm super-small:object-cover super-small:object-center super-small:h-screen " src={imageUrl+imageBg} alt="" />
            <div className="xl:flex xl:items-center xl:justify-between xl:p-24 relative bg-zinc-800 w-fit super-small:bg-opacity-0 xl:bg-opacity-20 rounded-xl">
                <div className="flex p-4 gap-2">
                    { movie_id.searchId != 'comum' ? <Link to={`/search/${movie_id.searchId}`}><button className="p-1 rounded-xl xl:hidden bg-red-700 hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg "><img className="m-auto" src="/src/assets/imagens/arrow_left.png" alt="" /></button></Link> : <></>}
                    <Link to="/"><button className="p-1 rounded-xl xl:hidden bg-red-700 hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg "><img className="m-auto" src="/src/assets/imagens/home.png" alt="" /></button></Link>
                    
                </div>
                <div className="xl:hidden w-screen flex justify-center items-center "><img className=" super-small:w-56 mt-32 rounded-xl m-auto xl:hidden" src={imageMovie != null ? imageUrl + imageMovie : '../src/assets/imagens/no_image_md.png'} alt="" /></div>
                <div>
                    <div className="xl:flex xl:gap-2">
                        { movie_id.searchId != 'comum' ? <Link to={`/search/${movie_id.searchId}`}><button className="rounded-xl super-small:hidden xl:block bg-transparent hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg "><img className="m-auto" src="/src/assets/imagens/arrow_left.png" alt="" /></button></Link> : <div></div>}
                        <Link to="/"><button className="rounded-xl super-small:hidden xl:block bg-transparent hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg "><img className="m-auto" src="/src/assets/imagens/home.png" alt="" /></button></Link>
                    </div>
                    <div className= "super-small:bg-opacity-0 xl:bg-opacity-20 bg-zinc-900 rounded-xl xl:p-10">
                        <div className="flex xl:justify-between rounded-t-xl bg-zinc-900 super-small:bg-opacity-0 super-small:p-2 xl:bg-opacity-60 xl:p-10 text-white">
                            <div>
                                <div className="flex gap-3 w-fit p-3 pl-1 rounded-xl" >
                                    {genres.map(result => <p className="bg-zinc-900 super-small:bg-opacity-40 xl:bg-opacity-60 super-small:rounded-xl xl:rounded-sm super-small:p-2">{result.name.toUpperCase()}</p>)}
                                </div>
                                <div className="super-small:flex super-small:gap-2 xl:flex-none">
                                    <p className="xl:hidden w-fit p-2 flex items-center bg-yellow-400 bg-opacity-50 rounded-xl ">Avaliação: {average.toFixed(1)}</p>
                                    <p className=" bg-zinc-800 bg-opacity-60 super-small:w-fit xl:w-full super-small:p-3  xl:p-1 font-roboto rounded-md">LANÇAMENTO: {date}</p>
                                </div>
                            </div>
                            <div>
                                <p className="super-small:hidden xl:block p-2 bg-yellow-400 bg-opacity-20 rounded-xl ">Avaliação: {average.toFixed(1)}</p>
                            </div>
                        </div>
                        <div className=" bg-zinc-900 super-small:bg-opacity-10 xl:bg-opacity-40  xl:p-3 rounded-b-xl">
                            <h1 className="text-white text-3xl max-w-screen-sm font-roboto font-semibold p-4 text-left">{title}</h1>
                            <h2 className="text-white font-semibold text-2xl pt-8 pl-5">SINOPSE:</h2>
                            <div className="xl:w-smartphone  rounded-xl">
                                <p className="text-justify super-small:p-3 xl:p-10 text-white text-lg w-full h-40 overflow-scroll">{overView}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 text-white font-bold mt-5 ">
                        <button className=" xl:block super-small:hidden rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-28 h-9 hover:transition-all duration-200 hover:text-lg hover-">VER TRAILER</button>
                    </div>
                </div>
                <img className="  xl:w-96 super-small:hidden xl:block rounded-xl  xl:ml-14 " src={imageMovie != null ? imageUrl + imageMovie : '../src/assets/imagens/no_image_md.png'} alt="" />
                
            </div>
        </div>
    )
}