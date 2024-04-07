import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import NotFoundPage from './pages/NotFoundPage';
import Loading from './components/Loading/Loading';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviesCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MoviesRewiews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesRewiews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}