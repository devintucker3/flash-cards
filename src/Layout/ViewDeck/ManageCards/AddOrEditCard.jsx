import React, { useEffect, useState, Fragment } from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import {createCard, readCard, updateCard} from "../../../utils/api/index";
import Error from "../../Error/Error";


function AddOrEditCard({singleDeck, setSingleDeck, error, setError, deckId, deckUrl, edit}) {
    const [formData, setFormData] = useState({});
    const [card, setCard] = useState({});
    const abortController = new AbortController();
    const history = useHistory();
    const {params: {cardId}} = useRouteMatch();
    const newDeck = {...singleDeck};

    useEffect(() => {
        if (edit) {
            readCard(cardId, abortController.signal)
                .then(response => {
                    setCard(() => ({...card, ...response}))
                })
                .catch(setError);
        } else {
            setCard(() => ({...card, front: "", back: ""}));
        }

        return () => abortController.abort();
    }, []);

    useEffect(() => {
        setFormData(() => ({...formData, ...card}));
    }, [card]);

    function changeHandler({target}) {
        setFormData(() => ({...formData, [target.name]:target.value}));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (edit) {
            updateCard(formData, abortController.signal)
                .then(response => {
                    const index = singleDeck.cards.findIndex(selected => selected.id === card.id);
                    newDeck.cards[index] = response;
                    setSingleDeck(() => ({...newDeck}))
                })
                .then(history.push(deckUrl))
                .catch(error => {
                    setError(() => error);
                    console.log(error);
                });
        } else {
            createCard(deckId, formData, abortController.signal)
                .then(response => {
                    newDeck.cards.push(response);
                    setSingleDeck(() => ({...newDeck}));
                })
                .then(() => setFormData(() => ({...formData, front: "", back: ""})))
                .catch(error => {
                    setError(() => error);
                    console.log(error);
                })
        }

        return () => abortController.abort();
    }

    if (error) {
        return <Error setError={setError} />
    }
}

export default AddOrEditCard;