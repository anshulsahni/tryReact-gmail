import React from 'react';
import _ from 'underscore';

class To extends React.Component {

  constructor() {
    super();
  }

  renderRecipients() {
    var key=-1;
    var recipientsMarkup = _.map(this.props.tos,(to) => {
      key++;
      return (
          <span key={ key }>
            {to.name} &lt;{to.email}&gt;
          </span>
        );
    });
    return recipientsMarkup;
  }

  render() {
    console.log(this.renderRecipients());
    return (
        <div>
          <span style={{ fontWeight : 900 }}>To:</span>
          {this.renderRecipients()}
        </div>
      );
  }
}

export default To;
