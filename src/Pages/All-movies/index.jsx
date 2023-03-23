import React from "react";

const All_Movies = (props) => {

    /*
        Nessa funçao voce ira fazer com que a pagina se torne dinamica 
        ao clicar em TODOS FILMES.
        Nela ira conter alguns filmes para desmonstração  contendo: nome, foto,avaliaçao e data
     */
    return(
        <div className=" flex justify-center items-center h-screen bg-primary ">
            <h1 className=" text-7xl text-white" >Not Found {props.name}</h1>
        </div>
    )
}

export default All_Movies