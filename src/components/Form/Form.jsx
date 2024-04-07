import styles from './Form.module.css'

export default function Form({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.input.value.trim();

    if (!value) {
      alert('Please enter valid search query!');
      return;
    }

    onSubmit(value);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="text" name="input" required />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}