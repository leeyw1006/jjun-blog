import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';


export interface Menu {
  path: string,
  exact?: boolean,
  label: string,
  component: () => JSX.Element
  hidden?: boolean,
}


export interface SideNavBarProps {
  menus: Menu[]
  children: JSX.Element | JSX.Element[]
}

export const SideNavBar = (props: SideNavBarProps) => {

  function showItems() {
    return props.menus.map((menu,index) => <div style={{padding:"30px"}} key={menu.path}><Link to={menu.path}>{menu.label}</Link></div>)
  }

  return (
    <div className="side-nav-bar-contents">
      <div className={"side-nav-bar-panel"}
           style={{
             position:'fixed',
             height:'100%',
             display:"flex",
             flexDirection:"column",
             justifyContent:"flex-start",
             backgroundColor:"darkcyan",
             left:"0",
             width:"300px",
             fontSize:"30px",
           }}>
        {showItems()}
      </div>
      <div className={"side-nav-bar-children"}>
        {props.children}
        <Switch>
          {props.menus.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}