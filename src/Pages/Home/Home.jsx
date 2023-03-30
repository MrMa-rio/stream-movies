import { useEffect, useState } from "react";
import "swiper/css";
import { randomMovies } from "../../api";
import {NavBar} from "../NavBar/Navigation";
import {Lancamentos} from "./lancamentos";
import {Popular_Filmes} from "./popular_filmes"
import {Top_Filmes} from "./top_filmes"


function Home() {

  const [bgMovie, setBgMovie] = useState()

  useEffect(() =>{
    randomMovies().then((data) => {
      setBgMovie(data)

    })
  },[])
  
  return (
    <div className="bg-primary transition-all ease-out w-screen h-fit">
      <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative"> 
        <img className="absolute w-screen h-fit blur-sm super-small:object-cover super-small:fixed super-small:h-screen " src={bgMovie} alt="" />
        <div>
          <div className="relative xl:pt-0 pt-32">
            <div className=" xl:hidden relative ">
              <NavBar />
            </div>
          </div>
          <div className="xl:block super-small:flex super-small:justify-center small:flex small:justify-center">
            <div className="xl:flex xl:justify-between xl:pl-40 xl:pr-40 xl:pt-0">
              <div className="xl:w-80 super-small:w-64 md:w-screen h-fit relative xl:mt-10 rounded-lg xl:bg-slate-400 xl:bg-opacity-20 super-small:bg-opacity-0 small:bg-opacity-0">
                <Lancamentos />
              </div>
              <div className="block">
                <div className="bg-opacity-0 xl:w-fit xl:h-fit xl:relative super-small:hidden small:hidden xl:block relative xl:mt-10 rounded-lg bg-slate-400">
                  <NavBar />
                </div>
                <div className="m-auto xl:w-80 super-small:w-64 md:w-screen xl:mt-20 h-fit relative rounded-lg bg-slate-400 xl:bg-opacity-20 super-small:bg-opacity-0 small:bg-opacity-0">
                  <Top_Filmes />
                </div>
              </div>
              <div className="xl:w-80 super-small:w-64 md:w-screen h-fit relative xl:mt-10 rounded-lg bg-slate-400 xl:bg-opacity-20 super-small:bg-opacity-0 small:bg-opacity-0">
                <Popular_Filmes />
              </div>
            </div>
          </div>
          <h2 className=" text-center text-red-900 font-bold pb-2 relative">CornFlixBR - Mario 2023</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
