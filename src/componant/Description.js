import './Description.css';

function Description({heading, desc}){
  return(
    <div className="Description container">
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  )
}
export default Description;