import React from 'react';

function flashCard(props) {
        let question = props.value.question
        let answer = props.value.answer
    return (
      <div className='col md-4'>
        <div className='card'>
          <div className='card-body bg-dark'>
          <h3 className='card-title text-secondary'>Question</h3>
            <h5 className='card-title text-white'>{question}</h5>
          </div>
          <div className='card-body bg-secondary'>
            <h3 className='card-title text-light'>Answer</h3>
            <h5 className='card-title text-white'>{answer}</h5>
          </div>
        </div>
      </div>
    );
}

export default flashCard;
