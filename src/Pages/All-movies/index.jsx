import React from "react";
import { Link } from "react-router-dom";
const All_Movies = (props) => {

    /*
        Nessa funçao voce ira fazer com que a pagina se torne dinamica 
        ao clicar em TODOS FILMES.
        Nela ira conter alguns filmes para desmonstração  contendo: nome, foto,avaliaçao e data
     */
    return(
        <div className="p-10 h-screen bg-primary ">
            <h1 className=" text-5xl pt-32 text-white" >Nada Encontrado :/</h1>
            <Link to='/'><button className="text-white m-auto block mt-2 p-4 bg-secondary opacity-40 hover:opacity-100 ">PAGINA INICIAL</button></Link>
        </div>
    )
}

export default All_Movies