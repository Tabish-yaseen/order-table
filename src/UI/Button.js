import React from 'react';


export default function Button(props) {
  return (
    <div>
      <button type={props.type || 'button'} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}
