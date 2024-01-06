import { Component, Fragment } from 'react';

export class SearchBox extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor='searchBox'>
          <input
            type='search'
            id='searchBox'
            className='search-box'
            placeholder='search monsters'
            onChange={this.props.onSearchChangeHandler}
          />
        </label>
      </Fragment>
    );
  }
}
