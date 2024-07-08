import { Link } from "react-router-dom";
import './Film.css'


function Film({data}){
  return(
    <div className="card">
      <img src={"https://image.tmdb.org/t/p/w500"+data.backdrop_path} className="card-img-top" alt={data.title}/>
      <div className="card-body">
        <h5 className="card-title">{data.title.slice(0, 30)+"..."}</h5>
        <p className="card-text">{data.overview.slice(0, 80)+"..."}</p>
        <Link target="_blank" to={'/film/'+data.id} className="btn btn-primary">Details</Link>
      </div>
    </div>
  );
}
export default Film;