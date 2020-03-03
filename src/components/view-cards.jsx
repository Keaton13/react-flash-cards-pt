import React from 'react';
import FlashCard from './flash-card';

class ViewCards extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.cards)
    }
    render(){
        console.log('in view-cards render')
        const cards = this.props.cards
        const cardsFiltered = cards.map(function(card) {
            return <FlashCard key={card.id} value={card} cards={cards}/>
            })
        return (
            <div>
                <h1 className='text-center'>View Cards</h1>
                <div className='row row-cols-1 row-cols-md-3'>
                  {cardsFiltered};
                </div>
            </div>
    
        )
    }
}

export default ViewCards