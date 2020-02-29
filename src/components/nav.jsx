import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className='nav justify-content-end'>
          <li
            className={
              this.props.view === 'view-cards'
                ? 'badge badge-primary'
                : 'nav-item'
            }
          >
            <a
              className={
                this.props.view === 'view-cards'
                  ? 'nav-link text-white'
                  : 'nav-link'
              }
              onClick={() => this.props.setView('view-cards')}
              href='#'
            >
              View Cards
            </a>
          </li>
          <li
            className={
              this.props.view === 'review-cards'
                ? 'badge badge-primary'
                : 'nav-item'
            }
          >
            <a
              className={
                this.props.view === 'review-cards'
                  ? 'nav-link text-white'
                  : 'nav-link'
              }
              onClick={() => this.props.setView('review-cards')}
              href='#'
            >
              Review
            </a>
          </li>
          <li
            className={
              this.props.view === 'create-cards'
                ? 'badge badge-primary'
                : 'nav-item'
            }
          >
            <a
              className={
                this.props.view === 'create-cards'
                  ? 'nav-link text-white'
                  : 'nav-link'
              }
              onClick={() => this.props.setView('create-cards')}
              href='#'
            >
              Create Cards
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
