import React from 'react';
import autobind from 'autobind-decorator';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import renderDate from '../../helpers/renderDate';


var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

@autobind
class MailSummary extends React.Component {

  constructor() {
    super();
  }

  renderSummary() {
    return this.props.mail.subject.substring(0,20).trim() + '...';
  }

  redirectToMail() {
    appHistory.push('/mail/' + this.props.mail.key);
  }

  renderRecepients(recipients) {
    var names = '';
    if(recipients[0]) {
      names += recipients[0].name;
      if(recipients[1]) {
        names += ',' + recipients[1].name;
        if(recipients[2]) {
          names += '...';
        }
      }
    }
    return names;
  }

  handleOnClickStarred() {
    this.props.toggleMailProperty(this.props.mail.key,'starred');
  }

  render() {
    return(
        <tr>
          <td className = 'mdl-data-table__cell--non-numeric' >
            <i className = 'material-icons' onClick = { this.handleOnClickStarred } >
              { this.props.mail.starred ? 'star' : 'star_border' }
            </i>
          </td>
          <td className='mdl-data-table__cell--non-numeric' onClick = { this.redirectToMail } >
            <span className = { this.props.mail.read ? '' : 'bold' } >
              { this.props.mail.inFolder === 'INBOX' ? this.props.mail.from.name : 'To: ' + this.renderRecepients(this.props.mail.to) }
            </span>
          </td>
          <td className='mdl-data-table__cell--non-numeric' onClick = { this.redirectToMail } >
            { this.renderSummary() }
          </td>
          <td className='mdl-data-table__cell--non-numeric' onClick = { this.redirectToMail } >
            { renderDate(this.props.mail.sendingDate) }
          </td>
        </tr>
      );
  }
}

export default MailSummary;
