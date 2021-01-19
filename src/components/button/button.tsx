import React from 'react';


export interface buttonProps {
  label?: string
  clickHandler?: () => void
}

export const Button = (props: buttonProps) => {
  return (<button className="button"
                  onClick={() => props.clickHandler && props.clickHandler()}>{props.label}</button>)
}

Button.defaultProps = {
  label: "default button"
}