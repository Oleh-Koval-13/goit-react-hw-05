import { ThreeDots } from 'react-loader-spinner';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <strong>Loading...</strong>
      </p>
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#646cff"
        radius="8"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}