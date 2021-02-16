import React from 'react';
import {BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header"
import {SideNavBar} from "./components/SideNavBar/SideNavBar";
import {Footer} from "./components/Footer/Footer";
function App() {

  return (
    <Router>
      <div className="App">
        <SideNavBar>
          <Header content={
            (<React.Fragment>
              <div>REACT</div>
            </React.Fragment>)
          }></Header>
          <div>
          </div>
          <Footer></Footer>
        </SideNavBar>
      </div>
    </Router>
  );
}

export default App;
