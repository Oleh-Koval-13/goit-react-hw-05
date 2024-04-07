import MovieList from '../components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';

export default function HomePage() {
  const location = useLocation();
  const {
    data: movieList,
    isLoading,
    error,
  } = useFetch({
    component: 'homePage',
    data: [],
  });

  return (
    <div className="page-container">
      <h2>Trending today</h2>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {!error && movieList.length > 0 && (
        <MovieList movieList={movieList} from={location} defLocation="/" />
      )}
    </div>
  );
}