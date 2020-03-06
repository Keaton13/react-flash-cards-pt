import React from 'react';

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let question = this.props.value.question;
    let answer = this.props.value.answer;
    let open = this.props.open;    
    let value =this.props.value;    

    return (
      <div className='col md-4 mt-4'>
        <div className='card'>
          <div className='card-body bg-dark'>
            <h3 className='card-title text-secondary'>Question</h3>
            <h5 className='card-title text-white'>{question}</h5>
          </div>
          <div className='card-body bg-secondary'>
            <h3 className='card-title text-light'>Answer</h3>
            <h5 className='card-title text-white'>{answer}</h5>
          </div>
          <div className='card-footer bg-dark text-center' onClick={() => {open(value)}}>
            <span className='far fa-trash-alt textColorWhite'></span>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
