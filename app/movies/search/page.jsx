import Card from '@/app/components/Card';
import SearchResults from '@/app/components/SearchResults';
import { getMovies } from '@/utils/request';
import React from 'react'

async function SearchPage({ searchParams }) {
  const searchText = searchParams.query;
  const movies = await getMovies(searchText);

  return (
    <SearchResults searchText={searchText} movies={movies}></SearchResults>

  )
}

export default SearchPage