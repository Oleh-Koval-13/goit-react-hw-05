import { Routes, Route } from "react-router-dom";
import "./App.css";
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const MoviesPage = lazy(() => import('./components/pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));


function App() {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;