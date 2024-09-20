import "../../styles/Home/salon-thumbnail.css";

import SalonThumbnail from "../../components/Home/SalonThumbnail";
import { salons } from "../../assets/arraysOfObjects";

function CreateSalonsCarousel(salon) {
    return (
      <SalonThumbnail
        key={salon.id}
        gender={salon.gender}
        link={salon.link}
        rating={salon.rating}
        name={salon.name}
        distance={salon.distance}
        address={salon.address}
        time={salon.time}
      />
    );
  }

function SalonsCarousel(props) {
    return(
        <div className="salons-carousel">
          <hr/>
          <div id="row0">
            <h2 className="heading">{props.heading}</h2>
            <span className="buttons">
              <img src="./src/assets/Home/salonThumbnail/left-arrow.svg"></img>
              <img src="./src/assets/Home/salonThumbnail/right-arrow.svg"></img>
            </span>
          </div>
            <div className="wrapper">
              {salons.map(CreateSalonsCarousel)}
            </div>
        </div>
    );
}

export default SalonsCarousel;
