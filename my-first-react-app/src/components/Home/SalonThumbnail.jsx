import React from "react";
import { salons } from "../../assets/arraysOfObjects";

function SalonThumbnail(props) {
    return(
        <div className="thumbnail">
            <div id="top">
                <p id="gender" className={props.gender}>{props.gender}</p>
                <img id="salon" src={props.link}/>

                <span id="rating">
                    <img src="./src/assets/Home/salonThumbnail/star-icon.svg"></img>
                    <p>{props.rating}</p>
                </span>
            </div>

            <div id="text">
                <span id="row1">
                    <h3 id="name">{props.name}</h3>
                    <p id="distance">{props.distance}</p>
                </span>

                <span id="row2">
                    <img src="./src/assets/Home/salonThumbnail/location-icon.svg"></img>
                    <p id="address">{props.address}</p>
                </span>

                <span id="row3">
                    <img src="./src/assets/Home/salonThumbnail/time-icon.svg"></img>
                    <p id="time">{props.time}</p>
                </span>
            </div>
        </div>
    );
}

export default SalonThumbnail;