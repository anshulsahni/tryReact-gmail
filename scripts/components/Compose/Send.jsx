import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class Send extends React.Component {

  constructor() {
    super();
  }

  handleOnClickSendButton(event) {
    event.preventDefault();
    this.props.send();
  }

  render() {
    return(
        <button className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick = { this.handleOnClickSendButton }>
          Send
        </button>
      );
  }
}

export default Send;
