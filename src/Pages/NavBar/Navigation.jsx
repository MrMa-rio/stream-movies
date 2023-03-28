
import { Link, redirect, useNavigate } from "react-router-dom"
import { Search } from "../../components/search/search"
import { useState, useRef, useEffect } from "react";


function NavBar(){
   
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
        <div className=" hover:text-white w-fit font-roboto font-semibold bg-slate-700 hover:transition-all duration-700 hover:bg-opacity-50 bg-opacity-25 rounded-xl p-10">
            <img className="hover:w-40 hover:transition-all hover:opacity-90 duration-700 w-32 rounded-full hover:rounded-3xl m-auto opacity-40 shadow-xl shadow-gray-800" src="../src/assets/imagens/image3.jpg" alt="" />
            <nav>
                <li className="list-none flex gap-4 p-3  ">
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

export default NavBar