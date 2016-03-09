import React from 'react';
import Rebase from 're-base';

import MailFolder from './MailFolder';

class Starred extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <MailFolder 
          filterProp = 'starred'
          filterPropVal = { true }
        />
      );
  }
}

export default Starred;
