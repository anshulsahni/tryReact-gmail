import React from 'react';
import { Route,Router,useRouterHistory,Redirect } from 'react-router';
import { createHashHistory } from 'history';

import Inbox from './MailFolders/Inbox';
import Sent from './MailFolders/Sent';
import Drafts from './MailFolders/Drafts';
import Starred from './MailFolders/Starred';
import Search from './Actions/Search';
import Mail from './Mail/Mail';
import Compose from './Compose/Compose';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class Routes extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <Router history={ appHistory } >
          <Route path= '/inbox' component= { Inbox } />
          <Route path= '/drafts' component= { Drafts } />
          <Route path= '/sent' component= { Sent } />
          <Route path= '/starred' component= { Starred } />
          <Route path= '/search/:query' component= { Search } />
          <Route path= '/mail/:mailKey' component= { Mail } />
          <Route path= '/compose' component= { Compose } />
          <Redirect from='/' to='/inbox' />
        </Router>
      );
  }
}

export default Routes;
