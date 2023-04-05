import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import imageHome from '../../assets/imagens/home.png'
export const SearchTextFixed = () =>{

    const [text, setText] = useState('')
    const navigate = useNavigate()
    const timeToCallSomething = useRef(null)
    const onChangeHandler = ({ target: { value } }) => {
        setText(value.trim().length === 0 ? '' : value)
    }

    useEffect(() =>{

        if (timeToCallSomething.current) {
            clearInterval(timeToCallSomething.current);
        }
        timeToCallSomething.current = setTimeout(() =>{
            if(text != '' ){
                navigate(`/search/${text.trim()}`) 
            }
        }, 2000);
        return () => clearInterval(timeToCallSomething.current);
    },[text])

    return(
        <>
            <div className="flex justify-center ">
                <div className=" fixed top-0 ">
                    <div className="flex justify-center top-3  relative items-center xl:p-5 super-small:p-3 super-small:w-screen xl:w-fit gap-3 bg-primary bg-opacity-60 text-white rounded-xl">
                        <Link to="/"><button className=" relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto" src={imageHome} alt="" /></button></Link>
                        <input onChange={onChangeHandler} className=" relative w-smartphone bg-transparent rounded-lg border-b-black border-t-0 border-l-0 border-r-0 placeholder-white text-center placeholder-opacity-80" placeholder="Pesquise aqui.." type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}