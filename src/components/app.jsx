import React from 'react';
import CreateCards from './create-cards';
import ReviewCards from './review-cards';
import ViewCards from './view-cards';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'view-cards',
      cards: [],
      activeCard: '',
      arrayIndex: 0
    };

    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCards = this.addCards.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  componentDidMount(){
    let cards = localStorage.getItem('flash-cards');
    cards = JSON.parse(cards);

    if(cards !== null){
        this.setState({
            cards: cards
        });
    }
  }

  setView(newView) {
    this.setState({
      view: newView
    });
  }

  getView() {
    switch (this.state.view) {
      case 'create-cards':
        return <CreateCards 
          setView={this.setView}
          addCards={this.addCards}
          />;
      case 'review-cards':
        return <ReviewCards 
          setActiveCard={this.setActiveCard} 
          activeCard={this.state.activeCard}
          index={this.state.arrayIndex}
            />;
      case 'view-cards':
        return <ViewCards 
          cards={this.state.cards}/>;
      default:
        return null;
    }
  }

  saveCards() {
    let cards = this.state.cards;
    cards = JSON.stringify(cards);
    localStorage.setItem('flash-cards', cards);
  }

  addCards(card) {
    this.setState({
        cards: [...this.state.cards, card]
    }, () => {this.saveCards()});
  }

  setActiveCard(indexProp){
    let index = indexProp.index

    if(index >= this.state.cards.length){
        index = 0;
    } else if (index == -1){
        index = this.state.cards.length -1
    } else if (index === undefined){
      index = 0
    }

    this.setState({
      activeCard: this.state.cards[index],
      arrayIndex: index
    })
  }

  render() {
    console.log("Cards From App", this.state.cards)
    return (
            <div>
                <Nav setView={this.setView} view={this.state.view} />
                { this.getView() }
            </div>
    );
  }
}

export default App;
