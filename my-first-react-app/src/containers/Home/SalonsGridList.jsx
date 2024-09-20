import "../../styles/Home/salon-thumbnail.css";

import SalonThumbnail from "../../components/Home/SalonThumbnail";
import { salonsGrid, unCollapsed } from "../../assets/arraysOfObjects";

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

function SalonsGridList(props) {
    return(
        <div style={{ display: 'flex', flexDirection:'column'}}>
            
        <div className="salons-grid-list">
            
            <h2 className="heading">{props.heading}</h2>
          
            <div className="wrapper" id="collapsed">
                {salonsGrid.map(CreateSalonsCarousel)}
            </div>

            <div className="wrapper hidden">
                {unCollapsed.map(CreateSalonsCarousel)}
            </div>
        </div>
        <div id="view-more">
        Continue exploring salons 
        <button id="more">VIEW MORE</button>
    </div>
    </div>
    );
}


export default SalonsGridList;
