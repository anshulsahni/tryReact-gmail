import React from 'react';
import Rebase from 're-base';

import filterMailProps from '../../helpers/filterMailProps';
import MailList from '../MailList';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

class Inbox extends React.Component {

  constructor() {
    super();
    this.state = {
      mails: []
    };
    this.firebaseMailsRef = firebaseRef.syncState('mails',{
      context: this,
      state: 'mails',
      queries: {
        orderByChild: 'inFolder',
        equalTo: 'INBOX'
      },
      asArray: true
    });
    this.mailWithFilteredProps = [];
  }

  componentWillUpdate(nextProps,nextState) {
    var filteredMailProps = [ 'starred','from','subject','sendingDate','key' ];
    this.mailWithFilteredProps = filterMailProps(nextState.mails,filteredMailProps);
  }

  render() {
    return(
        <MailList mailList = {this.mailWithFilteredProps} />
      );
  }

  componentWillUnmount() {
    firebaseRef.removeBinding(this.firebaseMailsRef);
  }
}

export default Inbox;
