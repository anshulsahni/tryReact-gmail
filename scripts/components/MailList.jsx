import React from 'react';
import _ from 'underscore';

import MailSummary from './MailSummary/MailSummary';

class MailList extends React.Component {

  constructor() {
    super();
  }

  renderMailSummaries() {
    var key = -1;
    var mailSummaries = _.map(this.props.mailList,(mailItem) => {
      key++;

      return (
          <MailSummary
            key= {key}
            mail= {mailItem}
          />
        );
    });
    return mailSummaries;
  }

  render() {
    return(
        <table className='mdl-data-table mdl-js-data-table mdl-shadow--2dp mail-list-table'>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderMailSummaries()}
          </tbody>
        </table>
      );
  }
}

export default MailList;
