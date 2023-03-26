import React from "react";
import { Link } from "react-router-dom";


function ImageCard({id, link, name}){

    return(
        <div className=" "> 
            <Link to={`../details/${id}`}>
                <h3 className=" relative text-white text-center  p-1 font-semibold text-xl  hover:text-red-600">{name}</h3>
            </Link>
            <img className=" hover:opacity-100 opacity-80 hover:transition-all hover:duration-1000 border-2 border-secondary rounded-xl p-1 w-72 m-auto"src={link} alt="..."/>
        </div>
    )
}
export default ImageCard;