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
      cssBadge: 'view-cards',
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCards = this.addCards.bind(this);
  }

  setView(newView) {
    this.setState({
      view: newView,
      cssBadge: newView
    });
  }

  getView() {
    switch (this.state.view) {
      case 'create-cards':
        return <CreateCards setView={this.setView} addCards={this.addCards}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards() {
    let cards = this.state.cards;
    JSON.stringify(cards);
    localStorage.setItem('flash-cards', cards);
  }

  addCards(card) {
    this.setState({
        cards: [...this.state.cards, card]
    }, () => {this.saveCards()});
  }

  render() {
    console.log("Cards From App ", this.state.cards)
    return (
            <div>
                <Nav setView={this.setView} view={this.state.view} />
                { this.getView() }
            </div>
    );
  }
}

export default App;
