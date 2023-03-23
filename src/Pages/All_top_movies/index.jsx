import React from "react";

const All_Top = (props) => {

    /*
        Nessa funçao voce ira fazer com que a pagina se torne dinamica 
        ao clicar em TOP FILMES.
        Nela ira conter 20 filmes tops contendo, nome,data,avaliação
     */
    return(
        <div className=" flex justify-center items-center h-screen bg-primary ">
            <h1 className=" text-7xl text-white" >Not Found {props.name}</h1>
        </div>
    )
}

export default All_Top