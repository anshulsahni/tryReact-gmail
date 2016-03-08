import React from 'react';
import Rebase from 're-base';
import _ from 'underscore';
import autobind from 'autobind-decorator';

import sortMails from '../../helpers/sortMails';
import changeMailProperty from '../../helpers/changeMailProperty';
import changeAllMailsProperty from '../../helpers/changeAllMailsProperty';
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
    var mails = changeMailProperty(this.state.mails,mailKey,prop);
    this.setState({ 'mails': mails });
  }

  markAllMailsRead() {
    var mails = changeAllMailsProperty(this.state.mails,{ read : true });
    this.setState({ 'mails' : mails});
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
          markAllMailsRead = { this.markAllMailsRead }
        />
      );
  }

  componentWillUnmount() {
    firebaseRef.removeBinding(this.firebaseMailsRef);
  }
}

export default Drafts;
