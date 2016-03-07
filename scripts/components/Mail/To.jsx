import React from 'react';
import _ from 'underscore';

class To extends React.Component {

  constructor() {
    super();
  }

  renderRecipients() {
    var recipientsMarkup = _.map(this.props.tos,(to) => {
      return (
          <p>
            {to.name} &lt;{to.email}&gt;
          </p>
        );
    });
    return recipientsMarkup.join(', ');
  }

  render() {
    return (
        <div>
          {this.renderRecipients()}
        </div>
      );
  }
}

export default To;
