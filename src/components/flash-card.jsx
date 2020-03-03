import React from 'react';

class FlashCard extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
  render() {
      let i = this.props.key
      let question = this.props.cards[i].question
      let answer = this.props.cards[i].answer
    return (
      <div className='col md-4'>
        <div className='card'>
          <div className='card-body'>
          <h3 className='card-title'>Question</h3>
            <h5 class='card-title'>{question}</h5>
          </div>
          <div class='card-body'>
            <h3 className='card-title'>Answer</h3>
            <h5 class='card-title'>{answer}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
