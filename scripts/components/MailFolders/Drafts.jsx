import React from 'react';
import Rebase from 're-base';
import _ from 'underscore';
import autobind from 'autobind-decorator';

import sortMails from '../../helpers/sortMails';
import MailList from '../MailList';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

@autobind
class Drafts extends React.Component {

  constructor() {
    super();
    this.state = {
      mails: [],
      fetchingData:true
    };
    this.firebaseMailsRef = firebaseRef.syncState('mails',{
      context: this,
      state: 'mails',
      asArray: true,
      queries: {
        orderByChild: 'inFolder',
        equalTo: 'DRAFTS'
      },
      then: (data) => {
        this.setState({ fetchingData: false })
      }
    });
    this.mailsToBePassed = [];
  }

  toggleMailProperty(mailKey,prop) {
    var mails = _.clone(this.state.mails);
    var index = _.findIndex(mails,{ key: mailKey });
    mails[index].starred = mails[index][prop] ? false: true;
    this.setState({ 'mails': mails });
  }

  componentWillUpdate(nextProps,nextState) {
    this.mailsToBePassed = sortMails(nextState.mails);
  }

  render() {
    return(
        <MailList 
          mailList = { this.mailsToBePassed } 
          toggleMailProperty = { this.toggleMailProperty }
          fetchingData = { this.state.fetchingData }
        />
      );
  }

  componentWillUnmount() {
    firebaseRef.removeBinding(this.firebaseMailsRef);
  }
}

export default Drafts;
