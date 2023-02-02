import React, { useState } from 'react';

import Card from '../components/card';
import Form from '../components/form';
import Layout from '../components/layout';

export default function HomePage() {
  const [isCorrect, setIsCorrect] = useState();

  const setCorrect = (guess) => {
    setIsCorrect(guess);
    console.log(guess);
  };
  const question = '26 L in the A';
  const answer = '26 Letters In The Alphabet';
  return (
    <Layout>
      <h1>Daily Ditloid</h1>
      <p>What is a Ditloid?</p>
      <p>
        A ditloid is a type of word puzzle in which a phrase, quotation, date,
        or fact must be deduced from the numbers and abbreviated letters in the
        clue. An example would be "7 D S" representing "Seven Deadly Sins".
        Common words such as 'the', 'in', 'a', 'an', 'of', 'to', etc. are not
        normally abbreviated.The name 'ditloid' was given by the Daily Express
        newspaper, originating from the clue "1 = DitLoID", to which the
        solution is 1 Day in the Life of Ivan Denisovich.
      </p>

      <Card answer={answer} question={question} isCorrect={isCorrect} />
      <Form answer={answer} setCorrect={setCorrect} isCorrect={isCorrect} />
    </Layout>
  );
}
