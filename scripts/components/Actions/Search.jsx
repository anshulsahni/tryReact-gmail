import React from 'react';

class Search extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <h1>Search query :{this.props.params.query}</h1>
      );
  }
}

export default Search;
