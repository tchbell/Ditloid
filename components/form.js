import styles from '../styles/form.module.scss';
import { useState } from 'react';
export default function Form(props) {
  const [wrongCopy, setWrongCopy] = useState('');
  const [rightCopy, setRightCopy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.guess.value, props.answer);
    if (e.target.guess.value.toLowerCase() === props.answer.toLowerCase()) {
      props.setCorrect(true);
      setWrongCopy('');
      setRightCopy('Nice Job!');
    } else {
      props.setCorrect(false);
      setWrongCopy('Try Again!');

      setTimeout(() => {});
    }
  };

  return (
    <>
      {' '}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="guess"
          name="guess"
          placeholder="Enter Guess Here"
        ></input>
        <button type="submit">Guess</button>
      </form>
      {props.isCorrect ? (
        <p className={styles.copy}>{rightCopy}</p>
      ) : (
        <p className={styles.copy}>{wrongCopy}</p>
      )}
    </>
  );
}
