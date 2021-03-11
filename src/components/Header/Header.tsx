import React from 'react';


export interface HeaderProps {
  content?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <div className="jjun-header"
           style={{
             backgroundColor:'rgba(211, 49, 99, 1)',
             height:"50px",
             fontSize:"30px"
           }}>
        JJUN 개발 블로그
      </div>
      {props.content}
    </div>
  );
}