export const Refresh = ()=>{

    return(
        <div className="bg-primary h-screen ">
            <div className="flex justify-center xl:p-28 super-small:p-16 h-32">
                <div className=" animate-spin border-8  rounded-full xl:h-24 super-small:w-20 super-small:h-20  border-solid border-x-red-800 xl:w-24">
                </div>
            </div>
            <h2 className="text-white text-center p-5 font-semibold" >LOADING..</h2>
        </div>
    )
}