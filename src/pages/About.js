import Header from "../componant/Header";
import './About.css'


function About(){
  return(
    <>
      <Header />
      <blockquote className="container blockquote about">
        <p className="lead">
        The movie site was created to try to fetch data through an API. It is a website created for the purpose of education. Through it, you can watch your favorite movies and know many data such as (release date, rating, showing duration...)
        </p>
        <footer className="blockquote-footer"> created by <cite title="Source Title"><a title="GitHub" rel="noreferrer"  target="_blank" href="https://github.com/AntoHany">Anton Hany</a></cite></footer>
      </blockquote>

    </>
  );
}
export default About;