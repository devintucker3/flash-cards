import React, { Fragment, useState } from "react";
import { useRouteMatch } from "react-router";
import Error from "../Error/Error";
import Cards from "./Cards";
import NeedMoreCards from "./NeedMoreCards";
import StudyNav from "./StudyNav";


function Study({singleDeck, deckId, error, setError}) {
    const [frontView, setFrontView] = useState(true);
    const [index, setIndex] = useState(0);
    const {url} = useRouteMatch();

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
                    <Cards singleDeck={singleDeck} frontView={frontView} setFrontView={setFrontView} index={index} setIndex={setIndex} />
                ) : (
                    <NeedMoreCards singleDeck={singleDeck} url={url} />
                )
            ) : null}
        </Fragment>
    )
}

export default Study;