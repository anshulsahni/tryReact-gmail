import React from 'react';
import _ from 'underscore';
import autobind from 'autobind-decorator';

import MailSummary from './MailSummary/MailSummary';

@autobind
class MailList extends React.Component {

  constructor() {
    super();
  }

  renderMailSummaries() {
    var key = -1;
    if(this.props.mailList.length === 0 && this.props.fetchingData === false) {
      return (
          <tr>
            <td colSpan = '4' >
              <center>
                <h3>No Mails Found</h3>
              </center>
            </td>
          </tr>
        );
    }
    var mailSummaries = _.map(this.props.mailList,(mailItem) => {
      key++;
      return (
          <MailSummary
            key= { key }
            mail= { mailItem }
            toggleMailProperty= { this.props.toggleMailProperty }
          />
        );
    });
    return mailSummaries;
  }

  markAllMailsRead() {
    this.props.markAllMailsRead();
  }
  
  render() {
    return(
        <div>
          <button className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick = { this.markAllMailsRead }>
            Mark All Read
          </button>
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
              <tr className = { this.props.fetchingData ? '' : 'hidden' }>
                <td colSpan = '4'>
                  <center>
                    <div className='mdl-progress mdl-js-progress mdl-progress__indeterminate'></div>
                  </center>
                </td>
              </tr>
              { this.renderMailSummaries() }
            </tbody>
          </table>
        </div>
      );
  }
}

export default MailList;
