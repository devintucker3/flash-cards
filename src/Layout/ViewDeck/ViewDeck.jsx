import React, { useEffect, useState, Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { readDeck } from "../../utils/api/index";
import Study from "../Study/Study";

function ViewDeck({decks, setDecks, error, setError}) {
    const [singleDeck, setSingleDeck] = useState({});
    const abortController = new AbortController();
    const {params: {deckId}, url} = useRouteMatch();

    useEffect(() => {
        readDeck(deckId, abortController.signal)
            .then(setSingleDeck)
            .catch(error);
        
        return () => abortController.abort();
    }, []);

    return (
        <Fragment>
            <Switch>
                <Route path={`${url}/study`}>
                    <Study deckId={deckId} singleDeck={singleDeck} setSingleDeck={setSingleDeck} error={error} setError={setError} />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default ViewDeck;