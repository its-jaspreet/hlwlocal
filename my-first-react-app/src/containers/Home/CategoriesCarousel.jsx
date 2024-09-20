import { useState } from "react";
import "../../styles/Home/categories-carousel.css";

import CategoryCircles from "../../components/Home/CategoryCircles.jsx";
import { categories } from "../../assets/arraysOfObjects.js";

const categoriesPerSlide = 6;

function CreateCategoriesCarousel(category) {
  return (
    <CategoryCircles
      key={category.id}
      link={category.link}
      text={category.text}
      altText={category.altText}
    />
  );
}

function CategoriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide1 = categories.slice(0, categoriesPerSlide);
  const slide2 = categories.slice(categoriesPerSlide, categoriesPerSlide*2);

  return (
    <div className="categories-carousel">
      <span>
        <h2 className="heading">What are you looking for?</h2>
        <a href="" className="link">
          Explore all &rarr;
        </a>
      </span>
      <div className="category-circles">
        {categories.map(CreateCategoriesCarousel)}
        
      </div>
      <div className="progress-buttons">
        <div className="button selected"> </div>
        <div className="button selected"> </div>
      </div>
    </div>
  );
}

export default CategoriesCarousel;
