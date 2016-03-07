import React from 'react';

class From extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <p>
        {this.props.name} &lt;{this.props.email}&gt;
      </p>
    );
  }
}

export default From;
