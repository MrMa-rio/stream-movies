import { useState } from "react";
import { Link } from "react-router-dom";



function NavBar(){
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(showElement == false ? true : false)
    
    return(
        <div className=" w-screen h-72 bg-primary transition-all relative overflow-hidden">
            <div className="flex items-center justify-between overflow-hidden lg:mr-20" >
                <div className=" overflow-hidden h-60">
                    <img className="absolute opacity-30 w-screen blur-sm lg:bg-center h-modal small:h-72 " src="src/assets/imagens/backgroundImage.jpg" alt="" />
                </div>
                
                <Link to="/" className="  p-5 rounded-full opacity-70 hover:opacity-100"><img className=" relative small:w-32 sm:w-36 md:w-36 lg:w-52 p-0  " src="./src/assets/imagens/image3.png" alt="" /></Link>
                <h2 className="font-extrabold text-6xl small:text-4xl lg:text-8xl  pr-5 text-black opacity-70 hover:text-red-800 hover:opacity-95">CornFlixBR</h2>
                <div className="absolute bottom-0">
                
                    <nav className="flex flex-row gap-4 small:mt-16 pl-10 bg-primary text-white border-t-2 border-b-2 md:flex justify-center w-screen small:text-xs">
                        <Link to="/popular" className="hover:bg-tertiary p-2 rounded-md">POPULARES</Link>
                        <Link to="/upcoming" className="hover:bg-tertiary p-2 rounded-md">LANCAMENTOS</Link>
                        <Link to="/top " className="hover:bg-tertiary p-2 rounded-md">TOP FILMES</Link>
                        
                        <div onClick={showOrHide} className="ml-auto p-3 pb-0 hover:bg-tertiary hover:rounded-lg mr-4 lg:m-0 "><img className="relative float-right w-5 pb-1" src="./src/assets/imagens/search_icon_white.png" alt="" /></div>
                        
                    </nav>
                    {showElement ? <div><input className="w-screen text-2xl p-2 small:bg-transparent rounded-md text-white bottom-0 " placeholder="Digite o nome de Filmes ou Series" type="text" name="" id="text" /></div> : false}
                </div>
            </div>     
            
        </div>
        
    )
}

export default NavBar