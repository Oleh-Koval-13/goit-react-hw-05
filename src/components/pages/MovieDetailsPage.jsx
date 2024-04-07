import { useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import tmdbAPI from '../utils/tmdb-api';
import GoBack from '../components/GoBack/GoBack';
import useFetch from '../utils/useFetch';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';
import styles from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = useRef(
    location.state?.from ?? location.state?.defLocation ?? '/'
  );

  const {
    data: movie,
    isLoading,
    error,
  } = useFetch({
    component: 'movieDetailsPage',
    param: movieId,
    data: {},
  });

  const {
    vote_average: voteAverage,
    genres,
    id,
    poster_path: posterPath,
    title,
    overview,
    release_date: releaseDate,
  } = movie;

  const poster = posterPath && `${tmdbAPI.posterImagePath}${posterPath}`;
  const releaseYear = releaseDate && releaseDate.slice(0, 4);
  const userScore = Math.round(voteAverage * 10);
  const movieGenres = genres && genres.map(genre => genre.name).join(', ');

  return (
    <div className="page-container">
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {id && (
        <>
          <GoBack to={backLink.current}>&larr; Go back</GoBack>
          <div className={styles.infoContainer}>
            <img
              className={styles.poster}
              src={poster}
              alt={`${title} poster image`}
              loading="lazy"
            />
            <div>
              <h2>
                {title} ({releaseYear})
              </h2>
              <p>{`User score: ${userScore}%`}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{movieGenres}</p>
            </div>
          </div>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
}