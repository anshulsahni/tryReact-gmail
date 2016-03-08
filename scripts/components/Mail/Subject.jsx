import React from 'react';

class Subject extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <p>
          Reg: {this.props.subject}
        </p>
      );
  }
}

export default Subject;
