import React, {useState} from 'react';
import {BlogDetail} from "../BlogDetail/BlogDetail";
import {BlogInfo} from "../BlogInfo/BlogInfo";
import {BlogList} from "../BlogList/BlogList";


export interface SideNavBarProps {
  children: JSX.Element | JSX.Element[]
}

export const SideNavBar = (props: SideNavBarProps) => {
  let items = ["상세페이지", "게시글 페이지", "소개 페이지"]
  const [size, setSize] = useState(0);

  function showItems() {
    return items.map((item,index) => {
      return <div style={{padding:"30px"}} onClick={() =>setSize(index)}>{item}</div>
    })
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
        <BlogInfo style={size==0 ? {"display":"block"} : {"display":"none"}} />
        <BlogList style={size==1 ? {"display":"block"} : {"display":"none"}} />
        <BlogDetail style={size==2 ? {"display":"block"} : {"display":"none"}} />

      </div>
    </div>
  );
}