import React, { useEffect, useState } from "react";


export const Page = ({page})=> {

    
    console.log(page)
    const stepPrim = page + 1 < 8 ? page + 1 : 8
    const stepSec = page + 2 < 9 ? page + 2 : 9
    const stepTerc = page + 3 < 10 ? page + 3 : 10
    

    

    if(page > 1){
        return(
            <div className="flex justify-center gap-2">
                <button  className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepPrim}</button>
                <button className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepSec}</button>
                {page < 10 ? <button className="relative rounded-xl bg-red-900 hover:text-red-900 hover:bg-white w-10 h-12 hover:transition-all duration-200 hover:text-lg hover-">{stepTerc}</button> : null}
            </div>
        )
    }
    else{
        return(
            null
        )
    }
}