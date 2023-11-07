"use client"

import { useEffect, useState } from "react"

function SearchResults({ searchText, movies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies])
  return (
    <div>
        <div>
            <h1>Top Search Results for {searchText}</h1>
        </div>
    </div>
  )
}

export default SearchResults