import { useEffect, useState } from "react";
import "swiper/css";
import { randomMovies } from "../../api";
import NavBar from "../NavBar/Navigation";
import Lancamentos from "./lancamentos";
import Popular_Filmes from "./popular_filmes"
import Top_Filmes from "./top_filmes"




function Home() {

  
  
  const [bgMovie, setBgMovie] = useState()
  useEffect(() =>{
    
    randomMovies().then((data) => {
      setBgMovie(data)
    })
  },[])
  
 
 

  return (
    <div className="transition-all ease-out w-screen h-fit">
      <div className="w-screen h-fit bg-primary bg-center bg-cover transition-all relative"> 
        <img className="absolute w-screen h-fit blur-sm " src={bgMovie} alt="" />
      <div>
          <div className="flex justify-between pl-40 pr-40 ">
            <div className="w-80 h-fit relative mt-10 rounded-lg bg-slate-400 bg-opacity-20">
              <Lancamentos />
            </div>
            <div className="block">
              <div className="bg-opacity-0 w-fit h-fit relative mt-10 rounded-lg bg-slate-400">
                  <NavBar />
              </div>
              <div className="m-auto w-80 mt-20 h-fit relative rounded-lg bg-slate-400 bg-opacity-20">
                  <Top_Filmes />
               </div>
            </div>
            
            <div className="w-80 h-fit relative mt-10 rounded-lg bg-slate-400 bg-opacity-20">
             
              <Popular_Filmes />
              
            </div>
          </div>
            
          <h2 className=" text-center text-red-900 font-bold pb-4">CornFlixBR - Mario 2023</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
