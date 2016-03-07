import React from 'react';

class SendingDate extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <p>
          Sent At : {this.props.date}
        </p>
      );
  }
}

export default SendingDate;
