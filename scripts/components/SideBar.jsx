import React from 'react';
import { Link } from 'react-router';

class SideBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <nav className='mdl-navigation'>
          <a href = '#/compose' className = 'mdl-navigation__link'>Compose</a>
          <a href = '#/inbox' className = 'mdl-navigation__link'>Inbox</a>
          <a href = '#/sent' className = 'mdl-navigation__link'>Sent</a>
          <a href = '#/drafts' className = 'mdl-navigation__link'>Drafts</a>
          <a href = '#/starred' className = 'mdl-navigation__link'>Starred</a>
        </nav>
      );
  }
}

export default SideBar;
