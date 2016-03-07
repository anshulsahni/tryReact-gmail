import React from 'react';

class Subject extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <p>
          {this.props.content}
        </p>
      );
  }
}

export default Subject;
