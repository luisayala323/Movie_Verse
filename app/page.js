
import Image from 'next/image';
import { getTrendingMovies, getBooks } from '@/utils/request'; // Import the new getBooks function
import Card from './components/Card';

export default async function Homepage() {
  const movies = await getTrendingMovies();
  const books = await getBooks('your query here'); // Replace with your actual search query for books

  return (
    <div className='container my-3'>
      <h1>Top trending Movies</h1>
      <div className="flex-wrap gap-4 d-flex">
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>

      <h1>Top Books</h1>
      <div className="flex-wrap gap-4 d-flex">
        {books.map(book => (
          // Adjust the Card component to handle book data
          <Card key={book.id} book={book} type="book" />
        ))}
      </div>
    </div>
  );
}
