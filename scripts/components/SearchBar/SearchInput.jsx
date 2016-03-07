import React from 'react';
import autobind from 'autobind-decorator';

class SearchInput extends React.Component {

  constructor() {
    super();
  }

  @autobind
  handleSearchInputChange(event) {
    event.preventDefault();
    this.props.updateSearchQuery(this.refs.searchQuery.value);
  }

  render() {
    return(
        <div className='mdl-textfield mdl-js-textfield'>
          <input className='mdl-textfield__input' type='text' id='searchInput' onChange={this.handleSearchInputChange} ref='searchQuery' />
          <label className='mdl-textfield__label' htmlFor='searchInput'>Type Your Search Query...</label>
        </div>
      );
  }
}

export default SearchInput;
