import Image from 'next/image'
import { getTrendingMovies } from '@/utils/request'
import Card from './components/Card';

export default async function Homepage() {
  const movies = await getTrendingMovies();

  return (
    <div>
      <h1>Top trending Movies</h1>
        <div>
          {movies.map(movie => {
            return <Card movie={movie}></Card>
          })}
        </div>
    </div>
  )
}
