import React from 'react';

import SideBar from './SideBar';
import SearchBar from './SearchBar/SearchBar';
import Routes from './Routes';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
        <div>
          <div className='mdl-grid'>
            <div className='mdl-cell mdl-cell--12-col'>
              <div className='mdl-grid'>
                <div className='mdl-cell mdl-cell--3'></div>
                <div className='mdl-cell mdl-cell--6'>
                  <SearchBar />
                </div>
                <div className='mdl-cell mdl-cell--3'></div>
              </div>
            </div>
          </div>
          <div className='mdl-grid'>
            <div className='mdl-cell mdl-cell--3-col'>
              <SideBar />
            </div>
            <div className='mdl-cell mdl-cell--9-col'>
              <Routes />
            </div>
          </div>
        </div>
      );
  }
}

export default App;
