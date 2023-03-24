const api_key = "?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef"

const url_api = "https://api.themoviedb.org/3/"
const url_configuration = "configuration"
const region = "&language=pt-BR"
const top_movies = "movie/popular"



export const getPopularMovies = async () => {
    const response = await fetch(url_api + top_movies + api_key + region);
    const data = await response.json();
    console.log(data)
    return data;
}

export const getImages = async () =>{

    try {
        const response = await fetch(url_api + url_configuration + api_key)
        const data = await response.json()
        const result = await data.images
        
        return result
    } catch (error) {
        console.log(error)
    }
    
        
   
   
}