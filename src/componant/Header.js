import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header(){

  let list = useRef()

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);
  const [filmData, setFilmData] = useState([]);

  
  
  function handleSearch(e){
    setQuery(e.target.value)
    if(!query){
      setFilmData([])
    }
  }

  
  useEffect(() => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=521b82eb7f3fa158a3ce6bff1f50a98b`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFiODJlYjdmM2ZhMTU4YTNjZTZiZmYxZjUwYTk4YiIsIm5iZiI6MTcyMDM5MTgxNC4zNTE0Miwic3ViIjoiNjY4YjE2ZTlmOGU4MzEyYWVmMDA3N2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.laFJs6mnHo4GRXYWA5wPyxMDZ5K5zwgbY0NWl6CxUk4'
  }};
    if (search) {
      const fetchData = async () => {
        try {
          await fetch(url, options)
          .then(res => res.json())
          .then(json => setFilmData(json.results))
          if(!filmData.length > 0){
            let warning = document.getElementById('warning')
            warning.style.color="red"
            warning.textContent = "No Film Found"
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
      setSearch(false); // Reset the search state
    }
  },[search, query]);

  function handleSubmit(e){
    e.preventDefault();
    setSearch(true);
  }

  function handleToggle(){
    let warning = document.getElementById('warning').textContent = ''
    setFilmData([])
  }
  return(
    <>
      <nav  className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid container">
      <Link className="navbar-brand" to={"/"}>Movie Hub</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span onClick={handleToggle} className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>About</Link>
          </li>
        </ul>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
       
      </div>
    </div>
  </nav>
  <div id="filmList" className="film-list" >
    <ul ref={list}> 
    { filmData.length > 0 ? filmData.map(function(f){
      return(
        <li key={f.id}>
          <div className="image">
            <img src={"https://image.tmdb.org/t/p/w500"+f.poster_path} alt={f.title.slice(0,10)+'...'}/>
          </div>
          <div className="text">
            <Link target="_blank" to={"/film/"+f.id}>
              <p>{f.title}</p>
            </Link>
            <span>{f.release_date}</span>
          </div>
        </li>
        )}): <p id="warning"></p>}
    </ul>
  </div>
  </>
  )
}
export default Header;