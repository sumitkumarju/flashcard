import React from "react";

function Button(props) {
  console.log(props.onclick);
  return (
    <button className="button" onClick={props.onclick}>
      {props.text}
    </button>
  );
}

export default Button;
