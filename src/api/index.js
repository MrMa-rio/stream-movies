const api_key = "?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef"
const url_api = "https://api.themoviedb.org/3/"
const url_configuration = "configuration"
const region = "&language=pt-BR"

export const getMovies = async (type_movies,page=1) => {
    try{
        const response = await fetch(`${url_api}${type_movies}${api_key}${region}&page=${page}`)
        const data = await response.json()
        //console.log(data)
        return data
    } catch(error) {
        console.error(error)
    }
    
}

export const getDetailsMovie = async (movie_id) =>{
    try {
        const response = await fetch(`${url_api}movie/${movie_id}${api_key}${region}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getImages = async () =>{

    try {
        const response = await fetch(url_api + url_configuration + api_key)
        const data = await response.json()
        const result = await data.images
        //console.log(result)
        return result
    } catch (error) {
        console.error(error)
    }
    
        
   
   
}