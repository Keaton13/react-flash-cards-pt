import React from 'react';
import FlashCard from './flash-card';

class ViewCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currentCard: ''
    };
    this.close = this.close.bind(this);
    this.confirm = this.confirm.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      isOpen: false
    });
  }

  confirm() {
    const { onConfirm } = this.props;

    if (typeof onConfirm === 'function') {
      let currentValue = this.state.currentCard;
      onConfirm(currentValue);
    }

    this.close();
  }

  open(value) {
    this.setState({
      isOpen: true,
      currentCard: value
    });
  }

  render() {
    const cards = this.props.cards;
    let openFunction = this.open;
    let question = this.state.currentCard.question;
    let answer = this.state.currentCard.answer;
    const cardsFiltered = cards.map(function(card) {
      return (
        <FlashCard
          key={card.question}
          value={card}
          open={openFunction}
          cards={cards}
          open={openFunction}
        />
      );
    });
    if (this.state.isOpen) {
      return (
        <React.Fragment>
          <div className='modal-container'>
            <div className='modal-content row align-middle'>
              <h3 className='title col-sm'>
                Are you sure you want to delete this card?
              </h3>
              <h5 className='col-sm'>Q: {question}</h5>
              <h5 className='col-sm'>A: {answer}</h5>
              <div className='modal-actions right'>
                <button className='mr-2' onClick={this.close}>
                  Close
                </button>
                <button onClick={this.confirm}>Confirm</button>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-center'>View Cards</h1>
            <div className='row row-cols-1 row-cols-md-3 ml-4 mr-4'>
              {cardsFiltered}
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <div>
        <h1 className='text-center'>View Cards</h1>
        <div className='row row-cols-1 row-cols-md-3 ml-4 mr-4'>
          {cardsFiltered}
        </div>
      </div>
    );
  }
}

export default ViewCards;
