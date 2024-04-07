import styles from './GoBack.module.css';
import { Link } from 'react-router-dom';

export default function GoBack({ to, children }) {
  return (
    <Link className={styles.button} to={to}>
      {children}
    </Link>
  );
}