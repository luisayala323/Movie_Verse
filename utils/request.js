const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const GOOGLE_BOOKS_API_KEY = process.env.NEXT_PUBLIC_BOOKS_API_KEY;
const GOOGLE_BOOKS_BASE_URL = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;

//Fetch Trending movies
export const getTrendingMovies = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

//Fetch Movies based on query
export const getMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
}

//Fetch Movie Details for a specific movie
export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch movie with id ${id}`);
  }

  const movieData = await res.json();
  if (!movieData || typeof movieData !== 'object') {
    throw new Error(`Unexpected response data for movie with id ${id}`);
  }

  let bookData = null;
  if (movieData.bookId) {
    const bookRes = await fetch(`${GOOGLE_BOOKS_BASE_URL}/volumes/${movieData.bookId}?key=${GOOGLE_BOOKS_API_KEY}`);
    bookData = await bookRes.json();
  }

  return { movie: movieData, book: bookData };
}

//Fetch Similar Movies to a given movie ID
export const getSimilarMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

// Fetch Books based on query
export const getBooks = async (query) => {
  const res = await fetch(`${GOOGLE_BOOKS_BASE_URL}/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`);
  const data = await res.json();
  return data.items; // Assuming you want to return the items array from the response
};

// Fetch Book Details for a specific book
export const getBookDetails = async (id) => {
  const res = await fetch(`${GOOGLE_BOOKS_BASE_URL}/volumes/${id}?key=${GOOGLE_BOOKS_API_KEY}`);
  const data = await res.json();
  return data;
};
