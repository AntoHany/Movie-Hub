import { useParams } from "react-router-dom";
import useFitchData from "../customHook/useFitchData";
import Header from './Header';
import "./FilmDetails.css"

export function FilmDetails() {
  
  // get film id from routing film/:filmId
  let filmId = useParams("filmId");
  filmId = filmId.filmId;


  const url = `https://api.themoviedb.org/3/movie/${filmId}?language=en-US`;

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFiODJlYjdmM2ZhMTU4YTNjZTZiZmYxZjUwYTk4YiIsIm5iZiI6MTcyMDM5MTgxNC4zNTE0Miwic3ViIjoiNjY4YjE2ZTlmOGU4MzEyYWVmMDA3N2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.laFJs6mnHo4GRXYWA5wPyxMDZ5K5zwgbY0NWl6CxUk4'
  }
  };

  const poster = false;

  const [film, setFilm] = useFitchData(url, options, poster);
  console.log(film);
  return (
    <>
      <Header />
      <div className="film-details container">
      <div className="image">
        <img src={"https://image.tmdb.org/t/p/w500"+film.backdrop_path} alt={film.title}/>
      </div>
      <div className="text">
        <h2>{film.title}</h2>
        <span>release date: {film.release_date}</span>
        <span>movie time: {film.runtime}min</span>
        <p>{film.overview}</p>
        <span>rating: {film.vote_average}</span>
        <span>raters count: {film.vote_count}</span>
        <span>language: {film.original_language}</span>
        
        <a target="_blank" rel="noreferrer" href={film.homepage}>Movie Home Page</a>
        <br/>
        <a className="imbd" rel="noreferrer" target="_blank" href={"https://www.imdb.com/title/"+film.imdb_id}>IMDB</a>
        </div>
    </div>
    </>
  );
}
