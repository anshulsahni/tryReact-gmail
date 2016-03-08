import React from 'react';
import Rebase from 're-base';
import _ from 'underscore';

import MailList from '../MailList';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      mails:[],
      fetchingData: true
    }
    this.firebaseMailsRef = firebaseRef.syncState('mails',{
      context: this,
      state: 'mails',
      asArray: true,
      then: (data) => {
        this.setState({ fetchingData: false })
      }
    })
    this.mailsToBePassed=[];
  }

  toggleMailProperty(mailKey,prop) {
    var mails = _.clone(this.state.mails);
    var index = _.findIndex(mails,{ key: mailKey });
    mails[index].starred = mails[index][prop] ? false: true;
    this.setState({ 'mails': mails });
  }

  componentWillUpdate(nextProps,nextState) {
    var queryRegex = new RegExp(nextProps.params.query,'g');    
    this.mailsToBePassed = _.filter(nextState.mails,(mail) => {

      var to = mail.to;
      var from = mail.from;
      var subject = mail.subject;
      var body = mail.body;

      for(var i in to) {
        if(queryRegex.test(to[i].name) || queryRegex.test(to[i].email))
          return true;
      }

      if(queryRegex.test(from.name) || queryRegex.test(from.email) || queryRegex.test(subject) || queryRegex.test(body)){
        return true;
      }
    });

    this.mailsToBePassed = _.sortBy(this.mailsToBePassed, (mail) => {
      return -1 * mail.sendingDate ;
    });
  }

  componentWillUnmount() {
    firebaseRef.removeBinding(this.firebaseMailsRef);
  }

  render() {
    return(
        <MailList 
          mailList = {this.mailsToBePassed}
          fetchingData = { this.state.fetchingData }
          toggleMailProperty = { this.toggleMailProperty }
        />
      );
  }
}

export default Search;
