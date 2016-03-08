import React from 'react';
import Rebase from 're-base';
import _ from 'underscore';
import autobind from 'autobind-decorator';

import sortedFilteredMails from '../../helpers/sortedFilteredMails';
import MailList from '../MailList';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

@autobind
class Inbox extends React.Component {

  constructor() {
    super();
    this.state = {
      mails: [],
      fetchingData: true
    };
    this.firebaseMailsRef = firebaseRef.syncState('mails',{
      context: this,
      state: 'mails',
      queries: {
        orderByChild: 'inFolder',
        equalTo: 'INBOX'
      },
      asArray: true,
      then: (data) => {
        this.setState({ fetchingData: false })
      }
    });
    this.mailsToBePassed=[];
  }

  componentWillUpdate(nextProps,nextState) {
    var mailFilterProps = [ 'starred','from','subject','sendingDate','key' ];
    this.mailsToBePassed = sortedFilteredMails(nextState.mails,mailFilterProps);
  }

  toggleStarredMail(mailKey) {
    var mails = _.clone(this.state.mails);
    var index = _.findIndex(mails,{ key: mailKey });
    mails[index].starred = mails[index].starred?false:true;
    this.setState({ 'mails': mails });
  }

  render() {
    return(
        <div>
          <MailList 
            mailList = { this.mailsToBePassed } 
            toggleStarredMail = { this.toggleStarredMail } 
            fetchingData = { this.state.fetchingData }
          />
        </div>
      );
  }

  componentWillUnmount() {
    firebaseRef.removeBinding(this.firebaseMailsRef);
  }
}

export default Inbox;
