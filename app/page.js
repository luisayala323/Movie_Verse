import Image from 'next/image';
import { getTrendingMovies, getBooks } from '@/utils/request'; // Import the new getBooks function
import Card from './components/Card';

export default async function Homepage() {
  const movies = await getTrendingMovies();
  const books = await getBooks('your query here'); // Replace with your actual search query for books

  return (
    <div className='container my-3' style={{ backgroundColor: 'black', color: 'white' }}>
      <h1 style={{ color: 'white' }}>Top trending Movies</h1>
      <div className="flex-wrap gap-4 d-flex">
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}