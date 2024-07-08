import './App.css';
import Description from './componant/Description';
import FilmList from './componant/Filmlist';
import Header from './componant/Header';

function App() {
  return (
    <>
      <Header />
      <Description heading={"Movie Hub"} desc={`
        This site offers you advantages.
        If you are a movie fan, 
        you can know many details such as (screening period, 
        release date, rating, cast, etc...) 
        Reliable information from IMDB
        `}/>
        <FilmList />
    </>
  );
}

export default App;
