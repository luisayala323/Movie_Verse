import { getMovieDetails, getSimilarMovies, getStreamingAvailability } from "@/utils/request"

async function MovieDetailsPage({ params }) {
    const { movie: movieDetails, book: bookDetails } = await getMovieDetails(params.id);
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const similarMovies = await getSimilarMovies(params.id);
    const streamingAvailability = await getStreamingAvailability([movieDetails.imdb_id]);

    return (
        <div className="mx-3 my-4">
            <div className="d-flex align-items-center">
                <div className="col-3">
                    <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt={movieDetails.title} />
                </div>
                <div className="mx-5">
                    <h3>{movieDetails.title}</h3>
                    <div className="d-flex">
                        <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.release_date}</p>
                        <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.original_language}</p>
                        <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.status}</p>
                    </div>
                    <div>
                        <p>
                            {movieDetails.genres && movieDetails.genres.map(genre => (
                                <span className="p-1 mx-1 text-white rounded bg-dark me-2" key={genre.id}>{genre.name}</span>
                            ))}
                        </p>
                    </div>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>

            {bookDetails && (
                <div>
                    <h4>Related Books:</h4>
                    <h5>{bookDetails.volumeInfo.title}</h5>
                    <p>{bookDetails.volumeInfo.authors.join(', ')}</p>
                    {bookDetails.volumeInfo.imageLinks && bookDetails.volumeInfo.imageLinks.thumbnail && (
                        <img src={bookDetails.volumeInfo.imageLinks.thumbnail} alt={bookDetails.volumeInfo.title} />
                    )}
                    <p>{bookDetails.volumeInfo.description}</p>
                </div>
            )}
            {/* Streaming Availability */}
            {streamingAvailability && streamingAvailability[movieDetails.imdb_id] && streamingAvailability[movieDetails.imdb_id].waysToWatch && streamingAvailability[movieDetails.imdb_id].waysToWatch.optionGroups ? (
                <div>
                    <h4>Streaming Availability:</h4>
                    <div>
                        <h4>Ways to Watch {streamingAvailability[movieDetails.imdb_id].title.title}:</h4>
                        {streamingAvailability[movieDetails.imdb_id].waysToWatch.optionGroups.map((group, index) => (
                            <div key={index}>
                                {group.watchOptions.map((option, index) => (
                                    <div key={index}>
                                        <p>{option.primaryText} - {option.secondaryText}</p>
                                        <a href={option.link.uri}>Watch Here</a>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <h4>Reviews:</h4>
                        <p>User Rating: {streamingAvailability[movieDetails.imdb_id].ratings.rating}</p>
                        <p>Meta Score: {streamingAvailability[movieDetails.imdb_id].metacritic.metaScore}</p>
                    </div>
                </div>
            ) : null}

            {/* Similar Movies */}
            {similarMovies && similarMovies.length > 0 && (
                <div>
                    <h4>Similar Movies:</h4>
                    {similarMovies.map((movie, index) => (
                        <div key={index}>
                            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                            <p>{movie.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MovieDetailsPage;