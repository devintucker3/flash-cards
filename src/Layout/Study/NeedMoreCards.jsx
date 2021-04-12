import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NeedMoreCards({singleDeck}) {
    return (
        <Fragment>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Not enough cards</h5>
                    <p class="card-text">
                        There are {singleDeck.cards.length} cards in this deck
                    </p>
                    <Link className="btn btn-primary" to={`/decks/${singleDeck.id}/cards/new`}>
                        Add Cards
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default NeedMoreCards;