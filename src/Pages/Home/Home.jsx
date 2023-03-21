import { useState } from "react"
import ThumbInitial from "../../components/thumbHome"
function Home() {
 
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(showElement == false ? true : false)



  return (
    <div>
      <div className="w-screen h-fit bg-primary transition-all relative">
        <div className="flex items-center justify-between overflow-hidden">
          <img className="absolute opacity-30 w-smartphone " src="./src/assets/imagens/backgroundImage.jpg" alt="" />
          <img className=" relative small:w-40 sm:w-36 md:w-36 lg:w-52 p-10  " src="./src/assets/imagens/image3.png" alt="" />
        <h2 className="font-extrabold text-6xl small:text-4xl pr-5 text-black opacity-70">CornFlixBR</h2>
        </div>
        <div>
          <nav className="flex flex-row gap-4 small:mt-16 pl-10 mt-3.5 text-white border-t-2 border-b-2 md:flex justify-center">
            <a className="hover:bg-tertiary p-2 rounded-md" href="">TOP</a>
            <a className="hover:bg-tertiary p-2 rounded-md" href="">LANÇAMENTOS</a>
            <a className="hover:bg-tertiary p-2 rounded-md" href="">SERIES</a>
            <div onClick={showOrHide} className="ml-auto p-3 pb-0 hover:bg-tertiary hover:rounded-lg mr-4 lg:m-0"><img className="relative float-right w-5" src="./src/assets/imagens/search_icon_white.png" alt="" /></div>
          </nav>
          
          {showElement ? <div><input className="w-screen text-2xl p-2 small:bg-transparent lg:bg-secondary rounded-md shadow-none outline-0 hover:bg-secondary text-white " placeholder="Digite o nome de Filmes ou Series" type="text" name="" id="text" /></div> : false}
          <div className="">
            
            <ThumbInitial name="Top Filmes" a={<Home />} />
            <ThumbInitial name="Filmes Lançamentos" a={<Home />} />
            <ThumbInitial name="Top Series" a={<Home />} />
            <ThumbInitial name="Series Lançamentos" a={<Home />} />
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Home
