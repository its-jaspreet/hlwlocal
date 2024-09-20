import React from "react";

function CategoryCircles(props) {
  return (
    <div className="category-circle">
      <img src={props.link} alt={props.altText} />
      <p>{props.text}</p>
    </div>
  );
}

export default CategoryCircles;
