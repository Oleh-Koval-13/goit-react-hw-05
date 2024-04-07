import { Link } from 'react-router-dom';

export default function MovieList({ movieList, from, defLocation }) {
  return (
    <ul>
      {movieList.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from, defLocation }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}