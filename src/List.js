import React from "react";
import Card from "./Card";
import "./List.css";

export default function List(props) {
    return (
        <section className="List">
            <header className="List Header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card) => 
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />
                )}
                <button className="List-add-button" type="button">+ Add Random Card</button>                
            </div>
        </section>
    );
}