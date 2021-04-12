import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function DecksDisplay({decks, setDecks, error, setError}) {
    return (
        <Fragment>
            {decks.map(deck => (
                <div className="card" key={deck.id}>
                    <div class="card-body">
                        <h5 className="card-title">{deck.name}</h5>
                        <p className="card-text">{deck.description}</p>
                        <Link className="btn" to={`/decks/${deck.id}`}>View</Link>
                        <Link className="btn" to={`/decks/${deck.id}/study`}>Study</Link>
                    </div>
                </div>
            ))}
        </Fragment>
    );
}

export default DecksDisplay;