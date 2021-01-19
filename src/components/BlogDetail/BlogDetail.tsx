import React from 'react';
import {Button} from "../button/button"
import logo from '../../리자몽.jpg';


export interface buttonProps {
  label?: string
  clickHandler?: () => void
}


function whenClicked(){
  alert("somebody click");
}

export const BlogDetail = (props: buttonProps) => {
  return (
    <React.Fragment>
      <div>
        <img src={logo} className="App-logo" alt="리자몽" />

        <div>react스터디 2일차입니다.</div>
      </div>
      <Button label={'클릭하세요'} clickHandler={whenClicked}></Button>
    </React.Fragment>
  )
}