import React,{useState} from 'react';
import './App.css';
import {BlogDetail} from "./components/BlogDetail/BlogDetail"
import {Header} from "./components/Header/Header"
import {SideNavBar} from "./components/SideNavBar/SideNavBar";
import {Footer} from "./components/Footer/Footer";

function App() {

  return (
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
  );
}

export default App;
