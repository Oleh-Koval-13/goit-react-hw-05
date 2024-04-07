import { useParams } from 'react-router-dom';
import tmdbAPI from '../../utils/tmdb-api';
import useFetch from '../../utils/useFetch';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import styles from './MovieCast.module.css';

export default function MoviesCast() {
  const { movieId } = useParams();
  const { data, isLoading, error } = useFetch({
    component: 'movieCast',
    param: movieId,
    data: {},
  });
  const { id, cast } = data;

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {id && cast.length === 0 && (
        <p>We don&apos;t have any credits for this movie</p>
      )}
      {id && cast.length > 0 && (
        <ul className={styles.list}>
          {cast.map(actor => (
            <li key={actor.id} className={styles.item}>
              <img
                className={styles.photo}
                src={`${tmdbAPI.posterImagePath}${actor.profile_path}`}
                alt={`${actor.name} photo`}
                loading="lazy"
              />
              <h4 className={styles.nameText}>{actor.name}</h4>
              <p className={styles.charText}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}