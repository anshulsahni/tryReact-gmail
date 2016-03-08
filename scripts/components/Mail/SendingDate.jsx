import React from 'react';

import renderDate from '../../helpers/renderDate';

class SendingDate extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <p>
          Sent On : { renderDate(this.props.date) }
        </p>
      );
  }
}

export default SendingDate;
