import { Component, Fragment } from 'react';

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <Fragment>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h2>{monster.name}</h2>
          </div>
        ))}
        <div></div>
      </Fragment>
    );
  }
}
