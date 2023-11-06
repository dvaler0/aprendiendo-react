import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'



function App() {
  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries( new window.FormData(event.target))
    console.log({query})
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...' type="text" />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
      
    </div>
  )
}

export default App
