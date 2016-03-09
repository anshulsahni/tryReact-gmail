import React from 'react';
import linkState from 'react-link-state';
import autobind from 'autobind-decorator';
import _ from 'underscore';
import Rebase from 're-base';

import Body from './Body';
import To from './To';
import Subject from './Subject';
import ActionButton from './ActionButton';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

@autobind
class Compose extends React.Component {

  constructor() {
    super();
    this.state = {
      to: '',
      body: '',
      subject: ''
    }
  }

  linkState(prop) {
    return linkState(this,prop);
  }

  sendMailIn(folder) {
    var from = {
      name: 'Anshul Sahni',
      'email': 'anshul_sahni@live.com'
    };

    var toArray = this.state.to.split(';');
    var to = _.map(toArray,(toEmail) => {
      return {
        name: toEmail.substring(0,toEmail.indexOf('@')),
        email: toEmail
      };
    });

    var mail = {
      body: this.state.body,
      subject: this.state.subject,
      read: false,
      starred: false,
      inFolder: folder,
      sendingDate: new Date().getTime(),
      to: to,
      from: from
    };

    firebaseRef.push('mails',{
      data: mail,
      then: this.clearStates
    });
  }

  clearStates() {
    this.setState({
      to: '',
      subject: '',
      body: ''
    });
  }

  send() {
    this.sendMailIn('SENT');
  }

  save() {
    this.sendMailIn('DRAFTS');
  }

  render() {
    return(
        <div>
          <To linkState = { this.linkState } />
          <Subject linkState = { this.linkState } />
          <Body linkState = { this.linkState } />
          <ActionButton 
            onClickHandler = { this.send }
            value = 'SEND'
          />
          <ActionButton
            onClickHandler = { this.save }
            value = 'SAVE'
          />
        </div>
      );
  }
}

export default Compose;
