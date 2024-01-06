import { Component, Fragment } from 'react';
import cardStyles from './card.module.css';

export class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <Fragment>
        <div key={id} className={cardStyles.cardContainer}>
          <img
            src={`https://robohash.org/${id}?set=set2`}
            alt={`monster ${name}`}
          />
          <h2>{name}</h2>
          <h3>{email}</h3>
        </div>
      </Fragment>
    );
  }
}
