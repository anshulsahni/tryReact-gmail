import React from 'react';

class To extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <div className = 'mdl-textfield mdl-js-textfield'>
          <input className = 'mdl-textfield__input' type = 'input' id = 'to-input' valueLink = { this.props.linkState('to') }/>
          <label className = 'mdl-textfield__label' htmlFor = 'subject-input'>Type Sender's E-Mail here...</label>
        </div>
      )
  }
}

export default To;
