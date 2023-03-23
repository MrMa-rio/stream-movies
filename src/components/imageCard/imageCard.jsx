import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard(props){

    return(
        <div>
            <Link to="/">
                <h3 className="text-white text-center p-1 font-semibold text-xl underline hover:text-red-600">{props.name}</h3>
            </Link>
            <img className=" border-2 border-secondary rounded-xl p-1"src={props.link} alt="..."/>
            
        </div>
    )
}