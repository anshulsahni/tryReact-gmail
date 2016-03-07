import React from 'react';
import Rebase from 're-base';

import filterMailProps from '../../helpers/filterMailProps';
import MailList from '../MailList';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

class Drafts extends React.Component {

  constructor() {
    super();
    this.state = {
      mails: []
    };
    this.firebaseMailsRef = firebaseRef.syncState('mails',{
      context: this,
      state: 'mails',
      asArray: true,
      queries: {
        orderByChild: 'inFolder',
        equalTo: 'DRAFTS'
      }
    });
    this.mailWithFilteredProps = [];
  }

  componentWillUpdate(nextProps,nextState) {
    var filteredMailProps = [ 'starred','to','subject','sendingDate','key' ];
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

export default Drafts;
