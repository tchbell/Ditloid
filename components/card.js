import styles from '../styles/card.module.scss';

export default function Card(props) {
  const correctAnswer = props.isCorrect
    ? styles.answer
    : 'styles.flipCardShake';

  return (
    <div className={`${styles.flipCard} ${correctAnswer}`}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h2>Question</h2>
          <p>{props.question}</p>
        </div>
        <div className={styles.flipCardBack}>
          <h2>Answer</h2>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
}
