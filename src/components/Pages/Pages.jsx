import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Home from "../../assets/imagens/home.png"
import ArrowLeft from "../../assets/imagens/arrow_left.png"
import ArrowRight from "../../assets/imagens/arrow_right.png"

export const Page = ({stepPage, page, setPage}) => {

    const [stepPrim, setStepPrim] = useState(page)
    const [stepSec, setStepSec] = useState(page)
    const [stepTerc,setStepTerc] = useState(page)
    const maxPage = 10

    useEffect(()=>{

        setStepPrim(page+1 < 8 ? page+1 : 8 )
        setStepSec(page+2 < maxPage ? page+2 : 9 )
        setStepTerc(page+3 < maxPage ? page+3 : maxPage )

    },[page])
    
    return(
        <>
            <div className="flex justify-center gap-2 mt-5">
                <Link to="/"><button className="relative block m-auto rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={Home} alt="" /></button></Link>
                {page != 1 ? <button onClick={() => stepPage(-1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={ArrowLeft} alt="" /></button> : null}
                <div className="flex justify-center gap-2">
                    {page == 1 || page > 1 && page <= maxPage ? <button onClick={()=>setPage(stepPrim)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepPrim}</button> : null}
                    {page == 1 || page > 1 ?  <button onClick={()=>setPage(stepSec)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepSec}</button> : null}
                    {page == 1 || page > 1 ? <button onClick={()=>setPage(stepTerc)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepTerc}</button> : null}
                </div>
                {page < maxPage ? <button onClick={() => stepPage(+1)} className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-fit h-fit hover:transition-all duration-200 hover:text-lg hover-"><img className="m-auto " src={ArrowRight} alt="" /></button> : null}
            </div>
        </>
    )
}