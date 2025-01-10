import { useState } from "react";
import { movieListOb } from "./movie";
const App = () => {

  const [movieList, setMovieList] = useState(movieListOb)

  function handleDelete(id) {
    setMovieList(movieList.filter((movie) => movie.id !== id ))
  }

  const [movieName, setMovieName] = useState("")
  const [movieYear, setMovieYear] = useState("")

  function handleSubmit (e) {
    e.preventDefault();
    movieName === '' || movieYear === '' ? alert('enter value') :
      setMovieList([...movieList, {
        id : movieList.length + 1,
        title : movieName,
        year : movieYear
      }]);
  }
  return (
  <>
    {movieList.map(({id, title, year}) => (
      <div style={{marginLeft:20}} key={id}>
        <h1>{title}</h1>
        <h4>Year : {year}</h4>

        <button onClick={ () => handleDelete(id)}>Delete</button>
      </div>
    ))}

    <div style={{marginLeft:20, marginTop:20}}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={movieName} placeholder="enter movie name..." onChange={(e) => setMovieName(e.target.value)}/>
        <input type="text" value={movieYear} placeholder="enter the year..." onChange={(e) => setMovieYear(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  </>
  );
}

export default App;