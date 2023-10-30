import { getMovieDetails } from "@/utils/request"

async function MovieDetailsPage({params}) {
    const movieDetails = await getMovieDetails(params.id)
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face"

    return (
        <div className="mx-3 my-4">
            <div className="d-flex align-items-center">
                <div className="col-3">
                        <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" />
                    </div>
                    <div className="mx-5">
                        <h3>{movieDetails.title}</h3>
                        <div className="d-flex">
                        <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.release_date}</p>
                        <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.original_language}</p>
                        <p className="px-2 py-1 text-white rounded bg-warning me-2">{movieDetails.status}</p>
                        </div>
                        <div>
                            <p>{movieDetails.genres.map(genre => {
                                return <span className="p-1 mx-1 text-white rounded bg-dark me-2" key={genre.id}>{genre.name}</span>
                            })}</p>
                        </div>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
    )
}

export default MovieDetailsPage