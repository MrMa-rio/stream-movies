
const imageUrl = 'https://image.tmdb.org/t/p/original'
let randomNumber = Math.floor( Math.random() * 17) 
const api_key = import.meta.env.VITE_API_KEY  //?api_key=bbce7d7263ec1765a0e2e55bb1cc0aef
const url_api = "https://api.themoviedb.org/3/"
const url_configuration = "configuration"
const region = "&language=pt-BR"

export const getMovies = async (type_movies,page) => {
    try{
        const response = await fetch(`${url_api}movie/${type_movies}${api_key}${region}&page=${page}`)
        const data = await response.json()
        return data
    } catch(error) {
        console.error(error)
    }
    
}

export const getResultMovies = async (query) =>{
    try {
        const response = await fetch(`${url_api}search/movie${api_key}${region}&page=1&include_adult=false&query=${query}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const randomMovies = async () =>{
    const page = 2 //temp
    const type_movies = 'popular'
    try {
        
        const response = await getMovies(type_movies,page)
        const result = await response.results
        const data = result[randomNumber]
        const randomImage = data.backdrop_path
        if(randomImage != null){
            return imageUrl+randomImage
        }
        else{
            return '../src/assets/imagens/backgroundImage.jpg'
        }
        
    } catch (error) {
        console.error(error)
        return '../src/assets/imagens/backgroundImage.jpg'
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


//delete
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