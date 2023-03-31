
import { Link, useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
export const NavBar = () => {
   
    const [text, setText] = useState('');
    const navigate = useNavigate()
    const timeToCallSomething = useRef(null);

    useEffect(() => {
        if (timeToCallSomething.current) {
            clearInterval(timeToCallSomething.current);
        }
        timeToCallSomething.current = setTimeout(() =>{
            if(text != '' ){
                navigate(`/search/${text}`) 
            }
        }, 2000);
        return () => clearInterval(timeToCallSomething.current);
    }, [text]);

    const onChangeHandler = ({ target: { value } }) => {
        setText(value);
    };
    
    return(
        <div className=" hover:transition-all hover:text-white hover:bg-opacity-50 xl:w-fit super-small:w-screen md:w-smartphone md:m-auto super-small:bg-opacity-0 relative font-roboto font-semibold bg-slate-700 duration-700 bg-opacity-25 rounded-xl xl:p-10 small:p-2">
            <Link to='/'><img className="xl:hover:w-64 hover:transition-all hover:opacity-100 xl:shadow-none shadow-xl duration-700 xl:w-48 opacity-70 rounded-full xl:m-auto" src="/src/assets/imagens/CORNFLIXBR_rect.png" alt="" /></Link>
            <nav>
                <li className="list-none xl:flex small:flex small:justify-center super-small:flex super-small:justify-center xl:relative gap-4 xl:p-3">
                    <ul>
                        <Link to='/popular'>
                            <p className="hover:bg-white hover:text-black p-3 rounded-md hover:transition-all duration-200">Populares</p>
                        </Link>                 
                    </ul>
                    <ul>
                        <Link to='/upcoming'>
                            <p className="hover:bg-white hover:text-black  p-3 rounded-md hover:transition-all duration-200">Lançamentos</p>
                        </Link>
                    </ul>
                    <ul>
                        <Link to='/top'>
                            <p className="hover:bg-white hover:text-black p-3 rounded-md hover:transition-all duration-200">Top Filmes</p>
                        </Link>                   
                    </ul>
                </li>
                <input onChange={onChangeHandler} className=" w-full bg-transparent rounded-lg border-b-black border-t-0 border-l-0 border-r-0 placeholder-black hover:placeholder-white text-center placeholder-opacity-80" placeholder="Pesquise aqui.." type="text" />
            </nav>
        </div>
    )
}