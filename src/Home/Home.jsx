import React, {Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import {listDecks} from "../utils/api/index";
import DecksDisplay from "./DeckDisplay";


function Home({decks, setDecks, error, setError}) {
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        listDecks(signal)
            .then(setDecks)
            .catch(error => {
                setError(() => error)
                console.log(error)
            });

        return () => abortController.abort();
    }, []);
    
    return (
        <Fragment>
            <Link to="/decks/new">Create Deck</Link>
            <DecksDisplay decks={decks} setDecks={setDecks} error={error} setError={setError} />
        </Fragment>
    );
}

export default Home;