import React from 'react';

class ReviewCards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardDisplay: "Front",
            arrowColorLeft: 'fas fa-angle-left fa-3x textColorWhite',
            arrowColorRight: 'fas fa-angle-right fa-3x float-right textColorWhite'
        }
        this.nextCard = this.nextCard.bind(this)
        this.previousCard = this.previousCard.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.flipCard = this.flipCard.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
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

    flipCard(){
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

    changeBackground(e){
        let classList = e.target.classList;

        if(classList.length <= 4){
            if(classList[3] == 'textColorWhite'){
                this.setState({
                    arrowColorLeft: 'fas fa-angle-left fa-3x textColorGrey'
                })
            } else {
                this.setState({
                    arrowColorLeft: 'fas fa-angle-left fa-3x textColorWhite'
                })
            } 
        } else {
            if(classList[4] == 'textColorWhite'){
                this.setState({
                    arrowColorRight: 'fas fa-angle-right fa-3x float-right textColorGrey'
                })            
        } else {
                this.setState({
                    arrowColorRight: 'fas fa-angle-right fa-3x float-right textColorWhite'
                })            } 
        }
    }

    render(){
        let text;
        let containerClass;

        if(this.state.cardDisplay == 'Front'){
            let data = this.props.activeCard.question
            text = <h1 className="text-center mt-5 mb-5">{data}</h1>
            containerClass = 'container p-3 my-3 bg-dark text-white'
        } else {
            let data = this.props.activeCard.answer
            text = <h1 className="text-center mt-5 mb-5">{data}</h1>
            containerClass = 'container p-3 my-3 bg-secondary text-white'
        }

        return (
            <div>
                <div>
                    <h1 className="text-center">Review Cards</h1>
                </div>
                <div className={containerClass}>
                    <div className="row align-items-center" onClick={this.flipCard}>
                        <div className="col-sm" onClick={(event) => {event.stopPropagation()}}>
                            <div onClick={this.previousCard} className="float-left">
                                <span onMouseLeave={this.changeBackground} onMouseOver={this.changeBackground} className={this.state.arrowColorLeft}></span>
                            </div>
                        </div>
                        <div className="col-sm">
                            {text}
                        </div>
                        <div className="col-sm" onClick={(event) => {event.stopPropagation()}}>
                            <div onClick={this.nextCard} className="float-right">
                                <span onMouseLeave={this.changeBackground} onMouseOver={this.changeBackground} className={this.state.arrowColorRight}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewCards