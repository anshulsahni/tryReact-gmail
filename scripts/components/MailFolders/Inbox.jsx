import React from 'react';
import Rebase from 're-base';

import MailFolder from './MailFolder';

class Inbox extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <MailFolder 
          filterProp = 'inFolder'
          filterPropVal = 'INBOX'
        />
      );
  }
}

export default Inbox;
