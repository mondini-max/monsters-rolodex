import { Component, Fragment } from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <Fragment>
        <div className='card-list'>
          {monsters.map((monster) => {
            const { name, email, id } = monster;
            return <Card key={id} id={id} name={name} email={email} />;
          })}
        </div>
      </Fragment>
    );
  }
}
