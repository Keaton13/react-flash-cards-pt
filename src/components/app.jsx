import React from 'react';
import CreateCards from './create-cards'
import ReviewCards from './review-cards'
import ViewCards from './view-cards'
import Nav from './nav'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view: 'view-cards',
            cssBadge: ''
        }
        this.setView = this.setView.bind(this);
        this.getView = this.getView.bind(this);
    }

    setView(newView){
        this.setState({
            view: newView,
            cssBadge: newView
        })
        console.log(this.state.cssBadge)
    }

    getView(){
        switch(this.state.view){
            case 'create-cards':
                return <CreateCards />;
            case 'review-cards':
                return <ReviewCards />;
            case 'view-cards':
                return <ViewCards />;
            default:
                return null;
        }
    }

    render(){
        return (
            <div>
                <Nav setView={this.setView} cssBadge={this.state.cssBadge}/>
                { this.getView() }
            </div>
        )
    }
}

export default App;