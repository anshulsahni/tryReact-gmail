import React from 'react';
import Rebase from 're-base';

import MailFolder from './MailFolder';

class Sent extends React.Component {

  render() {
    return(
        <MailFolder 
          filterProp = 'inFolder'
          filterPropVal = 'SENT'
        />
      );
  }
}

export default Sent;
