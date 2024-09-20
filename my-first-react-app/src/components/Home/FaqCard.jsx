import React from "react";
import { useState } from "react";
import { faqs } from "../../assets/arraysOfObjects";
import "../../styles/Home/faq-card.css"

function createFaqCard(faq) {
    return(
        <FaqCard
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
        />
    )
}

function FaqCard(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = (event) => {
        const clickedElementId = event.currentTarget.id;
        setIsOpen(!isOpen);
    };

    return(
        <div className={`faq-card ${isOpen ? "orange" : ""}`} id={props.id}>
            <div className="row1">
                <h3 id="question">{props.question}</h3>
                <img className={`${isOpen ? "invisible" : ""}`} onClick={toggleAnswer} id={props.id} src="./src/assets/Home/faqs/right-arrow.svg"></img>
                <img className={`${isOpen ? "" : "invisible"}`} onClick={toggleAnswer} id={props.id} src="./src/assets/Home/faqs/down-arrow.svg"></img>          
            </div>
            <p className={`${isOpen ? "" : "invisible"}`} id="answer">{props.answer}</p>
        </div>
    );
}

function FaqCards() {
    return(
        <div className="faq-cards">
            <div>
                <h2>Frequently Asked Questions</h2>
                <p>Ask everything you need to know about our products and services.<br/>
We are ready to answer all your questions.</p>
            </div>
            {faqs.map(createFaqCard)}
            <div id="view-more">
                <button id="more">VIEW MORE</button>
            </div>
        </div>
    );
}

export default FaqCards;