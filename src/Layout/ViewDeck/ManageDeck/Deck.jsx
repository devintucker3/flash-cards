import React from "react";
import {useRouteMatch, Link} from "react-router-dom";
import DeckDelete from "./DeckDelete";

function Deck({ singleDeck, decks, setDecks, error, setError, deckId }) {
  const { url } = useRouteMatch();

  if (Object.keys(singleDeck).length > 0) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{singleDeck.name}</h5>
          <p class="card-text">{singleDeck.description}</p>
          <Link className="btn btn-secondary mr-4" to={`${url}/edit`}>Edit</Link>
          <Link className="btn btn-primary mr-4" to={`${url}/study`}>Study</Link>
          <Link className="btn btn-primary mr-4" to={`${url}/deckId/new`}>Add Card</Link>
          <DeckDelete decks={decks} setDecks={setDecks} error={error} setError={setError} deckId={deckId} />
        </div>
      </div>
    )
  } else {
      return null
  }
}

export default Deck;
