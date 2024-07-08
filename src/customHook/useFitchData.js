import { useEffect, useState } from "react";

function useFitchData(url, options, poster){
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    getFilmData();
    
    async function getFilmData() {      
      try{
        
        const response = await fetch(url, options);
        if (!response.ok){
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        if (poster){
          setFilmData(json.results);
        }else{
          setFilmData(json);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  },[]);
  return [filmData];
}
export default useFitchData;