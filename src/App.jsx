import { useState } from "react";

const App = () => {

  const [movieList, setMovieList] = useState([{
    id : 1,
    title : 'Spiderman',
    year : '2004',
  }, {
    id: 2,
    title : 'How to Train Your Dragon',
    year : '2012',
  },{
    id: 3,
    title : 'sky',
    year : '2001',
  }]);

  function handleDelete(id) {
    setMovieList(movieList.filter((movie) => movie.id !== id ))
  }

  const [movieName, setMovieName] = useState("")
  const [movieYear, setMovieYear] = useState("")

  function handleSubmit (e) {
    e.preventDefault();
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