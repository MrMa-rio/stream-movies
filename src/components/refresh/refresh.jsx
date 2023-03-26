import React from "react";

export const Refresh = ()=>{

    return(
        <div className="bg-primary h-screen ">
            <div className="flex justify-center p-32 h-32">
                <div className=" animate-spin border-8  rounded-full h-24  border-solid border-x-red-800 w-24">
                </div>
            </div>
            <h2 className="text-white text-center p-5 font-semibold" >LOADING..</h2>
        </div>
    )
}