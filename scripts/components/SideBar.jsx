import React from 'react';
import { Link } from 'react-router';

class SideBar extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
          <div className='mdl-grid'>
            <div clasName='mdl-cell mdl-cell--12-col'>
              <ul className='mdl-list'>
                <li className='mdl-list__item'>
                  <a href='#/inbox' className='mdl-list__item-primary-content'>Inbox</a>
                </li>
                <li className='mdl-list__item'>
                  <a href='#/sent' className='mdl-list__item-primary-content'>Sent</a>
                </li>
                <li className='mdl-list__item'>
                  <a href='#/drafts' className='mdl-list__item-primary-content'>Drafts</a>
                </li>
                <li className='mdl-list__item'>
                  <a href='#/starred' className='mdl-list__item-primary-content'>Starred</a>
                </li>
              </ul>
            </div>
          </div>
      );
  }
}

export default SideBar;
