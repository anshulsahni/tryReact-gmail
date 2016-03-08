import React from 'react';

class From extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <p>
        From: 
        {this.props.from ? this.props.from.name : ''} 
        &lt;{this.props.from ? this.props.from.email : ''}&gt;
      </p>
    );
  }
}

export default From;
