import { NavBar } from "../NavBar/Navigation"

export const NotFound = () =>{
    return(
        <div className="bg-primary h-screen">
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center p-14 flex-col items-center text-white">
                <h1 className="text-7xl">Página não encontrada</h1>
                <h2 className="text-4xl">404</h2>
                <h2 className="text-4xl">:(</h2>
            </div>
        </div>
    )
}