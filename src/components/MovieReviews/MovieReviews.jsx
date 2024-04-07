import { useParams } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

export default function MoviesRewiews() {
  const { movieId } = useParams();
  const { data, isLoading, error } = useFetch({
    component: 'movieReviews',
    param: movieId,
    data: {},
  });
  const { id, results } = data;

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {id && results.length === 0 && (
        <p>We don't post have any review for this movie</p>
      )}
      {id && results.length > 0 && (
        <ul>
          {results.map(rev => (
            <li key={rev.id}>
              <h4>{`Author: ${rev.author}`}</h4>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}