import { Component, Fragment } from 'react';

export class SearchBox extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor='searchBox'>
          <input
            type='search'
            id='searchBox'
            className={this.props.className}
            placeholder={this.props.placeholder}
            onChange={this.props.onSearchChangeHandler}
          />
        </label>
      </Fragment>
    );
  }
}
