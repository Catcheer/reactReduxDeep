import React from "react";

function Sub(props) {
  return (
    <div onClick={props.onClick}>
      {props.name} {props.age}
    </div>
  );
}

export default Sub;
