
import Popular_Filmes from "./popular_filmes"
import Top_Filmes from "./top_filmes"




function Home() {
  

  return (
    
    <div className="transition-all ease-out w-screen ">
      <div className="w-screen h-fit bg-primary transition-all relative"> 
        <div>
          
          <Popular_Filmes />
          <Top_Filmes />
          <h2 className=" text-center text-red-900 font-bold pb-4">CornFlixBR - Mario 2023</h2>
          
          
          
        </div>
      </div>
    </div>
  )
}

export default Home
