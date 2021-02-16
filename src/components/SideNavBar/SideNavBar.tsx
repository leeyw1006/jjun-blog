import React, {useState} from 'react';
import {BlogDetail} from "../BlogDetail/BlogDetail";
import {BlogInfo} from "../BlogInfo/BlogInfo";
import {BlogList} from "../BlogList/BlogList";
import {Route, Link,Switch} from 'react-router-dom';


export interface SideNavBarProps {
  children: JSX.Element | JSX.Element[]
}

export const SideNavBar = (props: SideNavBarProps) => {
  let items = [{name:"소개 페이지",id:1,label:'BlogInfo' , path:'/info'},{name:"상세 페이지",id:2,label:'BlogDetail', path:'/detail'},{name:"게시글 페이지",id:3,label:'BlogList',path:'/page'}]
  const [menu, setMenu] = useState('BlogInfo');

  function showItems() {
    return items.map((item,index) => {
      return <div style={{padding:"30px"}} key={item.id} onClick={() =>setMenu(item.label)}><Link to={item.path}>{item.name}</Link></div>
    })
  }

  function renderSwitch(menu: string) {
    switch (menu) {
      case 'BlogInfo':
        return <Route path="/info"> <BlogInfo/> </Route>;
      case 'BlogList':
        return  <Route path="/detail"><BlogList/> </Route>;
      case 'BlogDetail':
        return  <Route path="/page"><BlogDetail/></Route>;
    }
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
          <Route path="/info"> <BlogInfo/> </Route>;
          <Route path="/detail"><BlogDetail/> </Route>;
          <Route path="/page"><BlogList/></Route>;
        </Switch>

      </div>
    </div>
  );
}