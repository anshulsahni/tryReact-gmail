import React from 'react';
import autobind from 'autobind-decorator';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';


var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

@autobind
class MailSummary extends React.Component {

  constructor() {
    super();
  }

  renderSummary() {
    return this.props.mail.subject.substring(0,20).trim() + '...';
  }

  redirectToMail(event) {
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

  render() {
    return(
        <tr onClick={this.redirectToMail}>
          <td className='mdl-data-table__cell--non-numeric'>
            <i className='material-icons'>
              {this.props.mail.starred ? 'star' : 'star_border'}
            </i>
          </td>
          <td className='mdl-data-table__cell--non-numeric'>
            <strong>{this.props.mail.to ? this.renderRecepients(this.props.mail.to) : this.props.mail.from.name}</strong>
          </td>
          <td className='mdl-data-table__cell--non-numeric'>
            {this.renderSummary()}
          </td>
          <td className='mdl-data-table__cell--non-numeric'>
            {this.props.mail.sendingDate}
          </td>
        </tr>
      );
  }
}

export default MailSummary;
