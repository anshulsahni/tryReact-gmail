import React from 'react';

class ActionButton extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <button className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick = { this.props.onClickHandler }>
          {this.props.value}
        </button>
      );
  }
}

export default ActionButton;
