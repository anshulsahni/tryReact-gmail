import React from 'react';
import Rebase from 're-base';
import _ from 'underscore';
import autobind from 'autobind-decorator';

import sortMails from '../../helpers/sortMails';
import changeMailProperty from '../../helpers/changeMailProperty';
import changeAllMailsProperty from '../../helpers/changeAllMailsProperty';
import MailList from '../MailList';

var firebaseRef = Rebase.createClass('http://gmails.firebaseio.com/');

@autobind
class MailFolder extends React.Component {

  constructor() {
    super();
    this.state = {
      mails: [],
      fetchingData: true
    };
    this.firebaseMailsRef = firebaseRef.syncState('mails',{
      context: this,
      state: 'mails',
      asArray: true,
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
    var filterProp = this.props.filterProp
    var filterPropVal = this.props.filterPropVal
    var folderMails = _.filter(nextState.mails,(mail) => {
      return mail[filterProp] === filterPropVal;
    });
    this.mailsToBePassed = sortMails(folderMails);
  }

  componentWillUnmount() {
    firebaseRef.removeBinding(this.firebaseMailsRef);
  }

  render() {
    return(
        <div>
          <MailList 
            mailList = { this.mailsToBePassed }
            toggleMailProperty = { this.toggleMailProperty }
            fetchingData = { this.state.fetchingData }
            markAllMailsRead = { this.markAllMailsRead }
          />
        </div>
      );
  }
}

export default MailFolder;
