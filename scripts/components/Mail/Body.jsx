import React from 'react';

class Body extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <p>
        {this.props.body}
      </p>
    );
  }
}

export default Body;
