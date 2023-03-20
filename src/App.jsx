import { useState } from "react"
function App() {
 
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)

  return (
    <div className="w-screen h-screen bg-primary transition-all">
      <div className="flex items-center">
        <img className="absolute w-screen h-36" src="./src/imagens/image4.png" alt="" />
        <img className=" relative sm:w-36 md:w-36 lg:w-52 p-10  " src="./src/imagens/image3.png" alt="" srcset="" />

      </div>
      <div className="">
        
        <nav className="flex flex-row gap-4 pl-10 text-white border-t-2 border-b-2 lg:flex justify-center">
        
        <a className="hover:bg-tertiary p-2 rounded-md" href="">TOP</a>
        <a className="hover:bg-tertiary p-2 rounded-md" href="">LANÇAMENTOS</a>
        <a className="hover:bg-tertiary p-2 rounded-md" href="">SERIES</a>
        <div onClick={showOrHide} className="ml-auto p-3 pb-0 hover:bg-tertiary  lg:m-0"><img className="relative float-right w-5" src="./src/imagens/search_icon_white.png" alt="" /></div>
        
        </nav>
        {showElement ? <div><input className="w-screen text-2xl p-2 small:bg-transparent lg:bg-secondary rounded-md shadow-none outline-0 hover:bg-secondary text-white " placeholder="Digite o nome de Filmes ou Series" type="text" name="" id="text" /></div> : false}
      </div>
      
    </div>
  )
}

export default App
