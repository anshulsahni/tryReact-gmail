import React from 'react';

class Subject extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <div className = 'mdl-textfield mdl-js-textfield'>
          <input className = 'mdl-textfield__input' type = 'input' id = 'subject-input' valueLink = { this.props.linkState('subject') }/>
          <label className = 'mdl-textfield__label' htmlFor = 'subject-input'>Type Your Subject Here ...</label>
        </div>
      );
  }
}

export default Subject;
