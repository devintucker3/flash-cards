import React, { Fragment, useState } from "react";
import Error from "../Error/Error";
import StudyCards from "./StudyCards";
import NeedMoreCards from "./NeedMoreCards";
import StudyNav from "./StudyNav";


function Study({singleDeck, deckId, error, setError}) {
    const [frontView, setFrontView] = useState(true);
    const [index, setIndex] = useState(0);

    if (error) {
        return <Error setError={setError} />
    }

    //Study nav bar with cards(3+) of deckId shown
    return (
        <Fragment>
            <StudyNav singleDeck={singleDeck} deckId={deckId} />
            <h2>{singleDeck.name}</h2>     
            {Object.keys(singleDeck).length ? (
                singleDeck.cards.length > 2 ? (
                    <StudyCards singleDeck={singleDeck} frontView={frontView} setFrontView={setFrontView} index={index} setIndex={setIndex} />
                ) : (
                    <NeedMoreCards singleDeck={singleDeck} />
                )
            ) : null}
        </Fragment>
    )
}

export default Study;