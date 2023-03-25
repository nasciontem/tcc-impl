import React from 'react';
import ButtonConfirmation from '../ButtonConfirmation/ButtonConfirmation';
import ExerciseQuestion from '../ExerciseQuestion/ExerciseQuestion';

function Exercise(props) {
  function getExerciseQuestions() {
    if (!Array.isArray(props?.questions)) { return null; }

    return props.questions.map(question => (
      <ExerciseQuestion key={question.number} statement={question.statement} answers={question.answers} />
    ));
  }

  return (
    <section className='classroom__content'>
      <h2>Exercícios</h2>
      <div>
        <ol className='exercise__questions'>
          {getExerciseQuestions()}
        </ol>
      </div>
      <div className='exercise__confirmation'>
        <ButtonConfirmation value='Enviar' />
      </div>
    </section>
  );
}

export default Exercise;