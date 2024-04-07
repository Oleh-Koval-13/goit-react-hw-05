import { useEffect, useState } from 'react';
import tmdbAPI from './tmdb-api';

export default function useFetch(initialState) {
  const [state, fetchData] = useState(initialState);
  const [data, setData] = useState(state.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);
        if (state.component === 'homePage') {
          const result = await tmdbAPI.getTrendingMovies();
          setData(result);
        }

        if (state.component === 'moviesPage') {
          if (!state.param) return;
          const result = await tmdbAPI.getMoviesByQuery(state.param);
          setData(result);
        }

        if (state.component === 'movieDetailsPage') {
          const result = await tmdbAPI.getMovieDetais(state.param);
          setData(result);
        }

        if (state.component === 'movieCast') {
          const result = await tmdbAPI.getMovieCast(state.param);
          setData(result);
        }

        if (state.component === 'movieReviews') {
          const result = await tmdbAPI.getMovieReviews(state.param);
          setData(result);
        }
      } catch (err) {
        setError(
          err?.message ?? 'Something went wrong. Please, try again later.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [state]);

  return { data, isLoading, error, fetchData };
}