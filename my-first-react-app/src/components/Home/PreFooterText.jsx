import React from "react";

function PreFooterText(props) {
    return(
        <div className="pre-footer-text">
            <p id="heading">{props.heading}</p>
            <p id="text">{props.text}</p>
        </div>
    );
}

export default PreFooterText;