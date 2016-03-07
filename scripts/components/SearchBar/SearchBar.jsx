import React from 'react';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import autobind from 'autobind-decorator';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

@autobind
class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
  }

  search() {
    var searchQuery = encodeURI(this.state.searchQuery);
    appHistory.push('/search/' + searchQuery);
  }

  updateSearchQuery(query) {
    this.setState({ searchQuery: query });
  }

  render() {
    return(
          <div>
            <form ref='searchForm'>
              <SearchInput updateSearchQuery= { this.updateSearchQuery }/>
              <SearchButton search={ this.search } />
            </form>
          </div>
      );
  }
}

export default SearchBar;
