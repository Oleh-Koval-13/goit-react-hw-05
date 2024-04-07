import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList/MovieList';
import Form from '../components/Form/Form';
import useFetch from '../utils/useFetch';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';

export default function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const paramQuery = searchParams.get('query');

  const {
    data: movieList,
    isLoading,
    error,
    fetchData,
  } = useFetch({
    component: 'moviesPage',
    param: query || paramQuery,
    data: [],
  });

  useEffect(() => {
    if (!query && !paramQuery) return;

    fetchData({
      component: 'moviesPage',
      param: query || paramQuery,
      data: [],
    });
  }, [query, paramQuery, fetchData]);

  function handleSubmit(value) {
    setQuery(value);
    setSearchParams({ query: value });
  }

  return (
    <div className="page-container">
      <Form onSubmit={handleSubmit} />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {movieList.length > 0 && (
        <MovieList
          movieList={movieList}
          from={location}
          defLocation="/movies"
        />
      )}
    </div>
  );
}