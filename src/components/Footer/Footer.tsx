import React from 'react';

export interface FooterProps {
}

export const Footer = (props: FooterProps) => {
  return (
    <div className="Footer"
         style={{
           position:'fixed',
           width:'100%',
           display:"flex",
           flexDirection:"column",
           justifyContent:"flex-start",
           backgroundColor:"darkgreen",
           bottom:"0",
           fontSize:"30px",
         }}>
      Footer 입니다.
    </div>
  );
}