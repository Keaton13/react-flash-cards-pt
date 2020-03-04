import React from 'react';

class ReviewCards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardDisplay: "Front"
        }
        this.nextCard = this.nextCard.bind(this)
        this.previousCard = this.previousCard.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.flipCard = this.flipCard.bind(this);
    }

    componentDidMount(){
        let index = this.props.index
        this.props.setActiveCard({index})
    }

    nextCard(){
        let index = this.props.index + 1;
        this.props.setActiveCard({index});
    }

    previousCard(){
        let index = this.props.index - 1;
        this.props.setActiveCard({index});
    }

    flipCard(e){
        console.log('flip card being called')
        if(this.state.cardDisplay == 'Front'){
            this.setState({
                cardDisplay: "Back"
            })
        } else {
            this.setState({
                cardDisplay: "Front"
            })
        }
    }

    render(){
        console.log(this.state.cardDisplay)
        let text;
        if(this.state.cardDisplay == 'Front'){
            let data = this.props.activeCard.question
            text = <h1 className="text-center mt-5 mb-5">{data}</h1>
        } else {
            let data = this.props.activeCard.answer
            text = <h1 className="text-center mt-5 mb-5">{data}</h1>
        }
        return (
            <div>
                <div>
                    <h1 className="text-center">Review Cards</h1>
                </div>
                <div className='container p-3 my-3 bg-dark text-white'>
                    <div className="row align-items-center" onClick={this.flipCard}>
                        <div className="col-sm" onClick={(event) => {event.stopPropagation()}}>
                            <div onClick={this.previousCard}>
                                <span className="fas fa-angle-left fa-3x"></span>
                            </div>
                        </div>
                        <div className="col-sm">
                            {text}
                        </div>
                        <div className="col-sm" onClick={(event) => {event.stopPropagation()}}>
                            <div onClick={this.nextCard}>
                                <span className="fas fa-angle-right fa-3x float-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewCards