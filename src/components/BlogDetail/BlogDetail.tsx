import React from 'react';
import {Button} from "../button/button"
import logo from '../../리자몽.jpg';


export interface buttonProps {
  label?: string
  clickHandler?: () => void,
  style?: Object
}


function whenClicked(){
  alert("somebody click");
}

export const BlogDetail = (props: buttonProps) => {
  return (
    <div style={props.style? props.style : {}}>
      <div>
        <img src={logo} className="App-logo" alt="리자몽" />

        <div>상세 페이지 입니다.</div>
      </div>
      <Button label={'클릭하세요'} clickHandler={whenClicked}></Button>
    </div>
  )
}