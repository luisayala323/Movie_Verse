const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
  const data = await res.json();
  return data;
}

//Fetch Similar Movies to a given movie ID
export const getSimilarMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

export const getAnimeData = async () => {
  const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortOrder=asc';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1342bd0379msh4ebaad44a893901p17cbffjsn37ae1efae3b8',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return JSON.parse(result); // You can return the parsed JSON data if needed.
  } catch (error) {
    console.error(error);
    throw error; // You can handle the error as needed.
  }
}
