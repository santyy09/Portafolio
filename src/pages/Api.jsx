import { useState, useRef } from "react"
import './Api.css'

export default function API(){
  const {inputValue,updateInputValue} = useSearch()
  const {movies,updateMovies} = useMovies()

  const handleSubmit = (e)=>{
    e.preventDefault()
    updateMovies({search:inputValue})
  }
  
  const handleChange = (e) => {
    const newInputValue = e.target.value
    if(newInputValue == ' ') return
    updateInputValue({value:newInputValue})
    //updateMovies({search:newInputValue})
  }

  return <div className='Api'>
    <h1>Buscar peliculas</h1>
    <header>
      <form className='searcher' onSubmit={handleSubmit}>
        <input value={inputValue} placeholder='Avengers, King Kong, Matrix' onChange={handleChange} name='textInput'></input>
        <button>Search</button>
      </form>
    </header>
    <div className='ListOfMovies'>
      <ListOfMovies movies={movies}/>
    </div>
  </div>

}

function getMovies({search}){
  const URL_SEARCH = `https://www.omdbapi.com/?apikey=4287ad07&s=${search}`
  return fetch(URL_SEARCH)
    .then(res => res.json())
    .then(res=>{
      const Search = res.Search
      const movies = Search.map((movie)=>({
        title: movie.Title,
        year: movie.Year,
        id: movie.imdbID,
        type: movie.Type,
        img: movie.Poster
      }))
      return movies
    })
}

function useSearch(){
  const [inputValue,setInputValue] = useState('')
  const updateInputValue= ({value})=>{
    setInputValue(value)
  }
  return {inputValue,updateInputValue}
}

function useMovies(){
  const [movies,setMovies] = useState([])
  const prevSearch = useRef(null)
  const updateMovies = ({search}) => {
    if (prevSearch.current === search) return
    prevSearch.current = search
    getMovies({search})
      .then(res => setMovies(res))
  }

  return {movies,updateMovies}
}

function ListOfMovies({movies}){
  console.log(movies)
  return (movies?.length > 0)?(
    <Movies movies={movies}/>
  ): <NoMovies/>
}

function Movies({movies}){
  console.log(movies)
  return <div className='Movies'>
    {
      movies.map(movie=><Movie key={movie.id} movie={movie}/>)
    }
  </div>
}

function Movie({movie}){
  return <article className='Movie'>
    <header>
      <h2>{movie.title}</h2>
      <h3>{movie.year}</h3>
    </header>
    <img src={movie.img} alt={movie.title} />
  </article>
}

function NoMovies(){
  return <div className='NoMovies'>
    <p>No hay peliculas</p>
  </div>
}
