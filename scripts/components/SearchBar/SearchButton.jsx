import React from 'react';
import autobind from 'autobind-decorator';

class SearchButton extends React.Component {

  constructor() {
    super();
  }

  @autobind;
  handleSearchButtonOnClick(event) {
    event.preventDefault();
    this.props.search()
  }

  render() {
    return(
        <button className='mdl-button mdl-js-button mdl-button--raised' onClick={this.handleSearchButtonOnClick}>
          <i className='material-icons'>search</i>
        </button>
      );
  }
}

export default SearchButton;
