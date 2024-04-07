import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;