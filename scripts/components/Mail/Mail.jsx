import React from 'react';
import Rebase from 're-base';

import Body from './Body';
import From from './From';
import To from './To';
import Subject from './Subject';
import SendingDate from './SendingDate';

var firebaseRef = Rebase.createClass('https://gmails.firebaseio.com/');

class Mail extends React.Component {

  constructor() {
    super();
    this.state = {
      mail:{},
      fetchingData: true
    };
  } 

  componentDidMount() {
    
    this.firebaseMailRef = firebaseRef.syncState('mails/' + this.props.params.mailKey, {
      context: this,
      state: 'mail',
      then: (data) => {
        this.setState({ fetchingData: false })
      }
    });
  }

  componentWillUnMount() {
    firebaseRef.removeBinding(this.firebaseMailRef);
  }

  render() {
    return(
        <div>
          <div className = { this.state.fetchingData ? '' : 'hidden' }>
            <div className = 'mdl-progress mdl-js-progress mdl-progress__indeterminate'></div>
          </div>
          <div className = { this.state.fetchingData ? 'hidden' : '' }>
            <To tos = { this.state.mail.to } />
            <From from = { this.state.mail.from } />
            <Subject subject = { this.state.mail.subject } />
            <Body body = { this.state.mail.body } />
            <SendingDate date = { this.state.mail.sendingDate } />
          </div>
        </div>        
      );
  }
}

export default Mail;
