import React from "react";
import {Link} from "react-router-dom"

function ViewDeckNav({ singleDeck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {singleDeck.name}
        </li>
      </ol>
    </nav>
  );
}

export default ViewDeckNav;
