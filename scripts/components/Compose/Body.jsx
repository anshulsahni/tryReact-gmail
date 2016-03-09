import React from 'react';

class Body extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <div className = 'mdl-textfield mdl-js-textfield'>
          <textarea className = 'mdl-textfield__input' type = 'text' rows= '3' valueLink = { this.props.linkState('body') }></textarea>
          <label className = 'mdl-textfield__label' htmlFor = 'body-input'>Type Your Body here ...</label>
        </div>
      );
  }
}

export default Body;
