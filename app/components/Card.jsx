import Link from "next/link";
import MovieDetailspage from "../movies/[id]/page";

function Card({ movie }) {
  // Check if 'movie' is undefined or if 'id' is not present
  if (!movie || !movie.id) {
    // Handle the case where 'movie' or 'id' is undefined
    return null; // or display an error message, or a default card, etc.
  }

  const IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  return (
    
    <div key={movie.id}>
      <Link className= "text-decoration-none" href={"/movies/" + movie.id}>
        <div className="card" style={{width: '15rem'}}>
          <img src={IMAGE_BASE_URL + movie.poster_path} alt=""/>
          <div>
            <h5 className="card-title">{movie.title}</h5>
            <p className="overflow-y-auto card-text" style={{height: "150px"}}>{movie.overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
