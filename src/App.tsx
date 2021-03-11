import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header"
import {SideNavBar ,Menu} from "./components/SideNavBar/SideNavBar";
import {Footer} from "./components/Footer/Footer";
import {BlogInfo} from "./components/BlogInfo/BlogInfo";
import {BlogDetail} from "./components/BlogDetail/BlogDetail";
import {BlogList} from "./components/BlogList/BlogList";
import {Detail} from "./components/Detail/Detail";
function App() {
  let menus: Menu[] = [
    {
      path: "/post",
      exact: true,
      label: "게시글 리스트",
      component: () => <BlogInfo/>
    },
    {
      path: "/detail",
      label: "글쓰기",
      component: () => <BlogDetail/>
    },
    {
      path: "/page",
      label: "상세 페이지",
      component: () => <BlogList/>,
      hidden: true
    },
    {
      path: "/post/:postId",
      label: "상세 페이지",
      component: () => <Detail />,
      hidden: true
    },
  ];

  return (
    <Router>
      <div className="App">
        <SideNavBar menus={menus}>
          <Header></Header>
          <Footer></Footer>
        </SideNavBar>
      </div>
    </Router>
  );
}

export default App;
