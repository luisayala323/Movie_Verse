"use client"

import { useEffect, useState } from "react"
import Card from './Card';

function SearchResults({ searchText, movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = (filter) => {
    let sortedMovies = [];
    switch (filter) {
      case "release_date":
        sortedMovies = [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        break;
      case "popularity":
        sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;
      case "vote_average":
        sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote);
        break;

      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  }
  return (
    <div>
      <div className="d-flex justify-content-between my-3 mx-3">
        <h1>Top Search Results for &quot;{searchText}&quot;</h1>
        <div className="col-2">
          <select onChange={(e) => filterMovies(e.target.value)} class="form-select" aria-label="Default select example">
            <option>Sort by</option>
            <option value="release_date">release year</option>
            <option value="popularity">popularity</option>
            <option value="vote_average">ratings</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {filteredMovies.map((movie) => {
          return <Card key={movie.id} movie={movie}></Card>
        })}
      </div>
    </div>
  )
}

export default SearchResults