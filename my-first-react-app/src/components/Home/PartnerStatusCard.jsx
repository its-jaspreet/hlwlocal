import React from "react";
import { statusCardDetails } from "../../assets/arraysOfObjects.js";
import "../../styles/Home/partner-status-card.css";

function createPartnerStatusCard(details) {
    return(
        <PartnerStatusCard
            key={details.id}
            id={details.color}
            heading={details.heading}
            description={details.description}
            buttonText={details.buttonText}
            link={details.link}
        />
    )
}

function PartnerStatusCard(props) {
    return(
        <div className="partner-status-card" id={props.id}>
            
            <div>   
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
                <button>{props.buttonText}</button>
                
            </div>
            <img id="vector" src={props.link}/>
        </div>
    )
}

function PartnerStatusCards() {
    return(
        <div>
            <div className="statusCards">
                {statusCardDetails.map(createPartnerStatusCard)}
            </div>
        </div>
    );
    
}

export default PartnerStatusCards;