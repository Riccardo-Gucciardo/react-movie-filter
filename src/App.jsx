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
  cost [genere,setGenere] = useState("")

return(
  <>
  <div className="container">
    <h1>
      <ul className="list-group">
        {
          filteredMovies.map((movie,index) =>{
            return(
              <li className="list-gruop-item" key={movie.id}>
                {movie.title} {movie.genre}
              </li>
            )
          })
        }
      </ul>
    </h1>
  </div>
  </>

)
}

export default App