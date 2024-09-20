import React from "react";

function IconButtons(props) {
  return (
    <div className="icon-button" id={props.id}>
      <p id="num">{props.num}</p>
      <div id="button">
      <img id="icon" src={props.src} alt={props.alt} />
      <p id="text">{props.text}</p>
      </div>
    </div>
  );
}

export default IconButtons;
