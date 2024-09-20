import React from "react";

function fillInColumnLinks(item) {
    return(
        <a key={item.id} href={item.linkURL}>
            {item.linkText}
        </a>
    );
}

function Column(props) {
    return(
        <div className={props.class}>
            <h2>{props.heading}</h2>
            {props.text}
        </div>
    );
}

export default Column;
export { fillInColumnLinks };
