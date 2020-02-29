import React from 'react';

class CreateCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCards(this.state);
    this.props.setView('view-cards');
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>Create Cards</h1>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Question</label>
              <input
                type='text'
                onChange={this.handleChange}
                value={this.state.question}
                className='form-control'
                id='exampleInputEmail1'
                name='question'
                placeholder='Enter email'
              ></input>
            </div>
            <div className='form-group'>
              <label>Answer</label>
              <input
                type='text'
                onChange={this.handleChange}
                value={this.state.answer}
                className='form-control'
                id='inputlg'
                name='answer'
                placeholder='Password'
              ></input>
            </div>
            <div className='clearfix'>
              <button
                type='text'
                className='btn btn-outline-danger float-right'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='btn btn-outline-primary float-right outline mr-2'
              >
                Save Card
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCards;
