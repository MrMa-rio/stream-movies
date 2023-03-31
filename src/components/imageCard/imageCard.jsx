import { Link } from "react-router-dom";

export const ImageCard = ({id, link=null, name,prev='comum'})=>{

    return(
        <div > 
            <Link to={`../details/${prev}/${id}`}>
                <h3 className=" xl:relative text-white text-center p-1 font-semibold text-xl overflow-hidden overflow-ellipsis whitespace-nowrap  hover:text-red-600">{name}</h3>
                <img className=" hover:opacity-100 opacity-80 hover:transition-all hover:duration-1000 border-2 border-secondary rounded-xl p-1 w-72 m-auto"src={link = null ?'../src/assets/imagens/no_image.png' : link} alt="..."/>
            </Link>
        </div>
    )
}
