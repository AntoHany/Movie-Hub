import { useEffect, useState } from "react";
import Film from "./Film";
import './Film.css'
import useFitchData from "../customHook/useFitchData";

function FilmList(){

  const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFiODJlYjdmM2ZhMTU4YTNjZTZiZmYxZjUwYTk4YiIsIm5iZiI6MTcyMDM5MTgxNC4zNTE0Miwic3ViIjoiNjY4YjE2ZTlmOGU4MzEyYWVmMDA3N2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.laFJs6mnHo4GRXYWA5wPyxMDZ5K5zwgbY0NWl6CxUk4'
    }
  };
  const poster = true;

  const [filmData, setFilmData] = useFitchData(url, options, poster);

  return(
    <div className="poster-section">
      <h2 className="text-center  p-4">Movie</h2>
      <div className="container">
        <div className="row">
          {filmData.map((film) => {
              return(
                <div className="poster">
                  <Film data={film}/>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}
export default FilmList;