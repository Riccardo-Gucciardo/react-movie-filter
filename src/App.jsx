import { useState,useEffect, use } from "react"

const titoList = [
  {id:1, title: 'Inception', genre: 'Fantascienza' },
  {id:2, title: 'Il Padrino', genre: 'Thriller' },
  {id:3, title: 'Titanic', genre: 'Romantico' },
  {id:4, title: 'Batman', genre: 'Azione' },
  {id:5, title: 'Interstellar', genre: 'Fantascienza' },
  {id:6, title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  const [filteredMovies,setFilteredMovies] = useState(titoList);
  const [genre,setGenre] = useState('')



useEffect(() => {
  if(genre !== ''){
    const selectedMovies = titoList.filter((movie) => movie.genre === genre)
    setFilteredMovies(selectedMovies)
  }
  else{
    setFilteredMovies(titoList)
  }
},[genre])

return(
  <>
  <div className="container">
    <h1>Lista Film</h1>
      <ul className="list-group">
        {
          filteredMovies.map((movie,index) =>{
            return(
              <li className="list-group-item" key={movie.id}>
                {movie.title} - {movie.genre}
              </li>
              
            )
          })
        }
      </ul>
      
      <div className="m-4">
        <select className="form-control" name="" onChange={(e)=> setGenre(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
          <option value="Romantico">Romantico</option>
        </select>
      </div>
    
  </div>
  </>

)
}

export default App