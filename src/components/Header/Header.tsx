import React from 'react';


export interface HeaderProps {
  content?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <div className={"jjun-header"}
           style={{
             backgroundColor:'lightblue',
             height:"50px",
             fontSize:"30px"
           }}>
        this is bigin
      </div>
      <div className={"jjun-header"}>
        {props.content}
      </div>
    </div>
  );
}