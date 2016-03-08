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
        <div className = 'mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header'>
          <header className = 'mdl-layout__header'>
            <div className = 'mdl-layout__header-row'>
              <div className = 'mdl-layout-spacer'></div>
              <SearchBar />
            </div>
          </header>
          <div className = 'mdl-layout__drawer'>
            <span className = 'mdl-layout-title'>aGmail</span>
            <SideBar />
          </div>
          <main className = 'mdl-layout__content'>
            <div className = 'page-content'>
              <center>
                <Routes />
              </center>
            </div>
          </main>
        </div>
      );
  }
}

export default App;
