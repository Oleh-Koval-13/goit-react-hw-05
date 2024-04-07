import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page-container">
      <h2>Page not found</h2>
      <Link to="/">Go to Home page</Link>
    </div>
  );
}