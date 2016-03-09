import React from 'react';
import Rebase from 're-base';

import MailFolder from './MailFolder';

class Drafts extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <MailFolder 
          filterProp = 'inFolder'
          filterPropVal = 'DRAFTS'
        />
      )
  }
}

export default Drafts;
