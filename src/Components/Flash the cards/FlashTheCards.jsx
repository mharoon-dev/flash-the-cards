import Card from "../card/Card.jsx";
import "./flashTheCards.css";
import React from "react";

export default function FlashTheCards() {
    const details = [
        {
            id: 1,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
        {
            id:2,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
        {
            id: 3,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
        {
            id: 4,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
        {
            id: 5,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
        {
            id: 6,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
    ]

    const [cardsDetails , setCardsDetails] = React.useState(details)

  return (
    <div
      className="container-fluid "
      style={{
        border: "2px solid red",
      }}
    >
      <div className="row">
        <div className="col-12 mt-4">
          <h1 className="d-flex justify-content-center align-items-center heading">
            Flash The Cards
          </h1>
        </div>



        {cardsDetails.map((card , index) => (
            // console.log(index),
            // console.log(card),
            
            <Card card={card} key={card.id} index={index} />
            
        ))}

      </div>
    </div>
  );
}


