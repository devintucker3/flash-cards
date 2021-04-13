import React from "react";
import {Link} from "react-router-dom";
import CardDelete from "./CardDelete";

function Cards({ singleDeck, setSingleDeck, error, setError, url }) {
  if (Object.keys(singleDeck).length > 0) {
    return singleDeck.cards.map((card) => (
      <div className="card" key={card.id}>
        <div className="card-body">
          <span className="card-text d-flex row">
              <p className="col-5">{card.front}</p>
              <p className="col-2"></p>
              <p className="col-5">{card.back}</p>
          </span>
          <div>
              <Link className="btn btn-secondary mr-4" to={`${url}/cards/${card.id}/edit`}>Edit</Link>
              <CardDelete singleDeck={singleDeck} setSingleDeck={setSingleDeck} error={error} setError={setError} cardId={card.id} />
          </div>
        </div>
      </div>
    ));
  } else {
      return null
  }
}

export default Cards;
