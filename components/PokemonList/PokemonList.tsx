import React, { useState } from "react";
import PokemonElement from "../PokemonElement";

function PokemonList() {

    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    const createListElements = () => {
        const elements = [];
        for (let i = 0; i < limit; i++) {
            elements.push(<PokemonElement key={i} pkmn={i + offset} />);
        }
        return elements;
    }

    return (
        <section data-testid="pokemon-list-container">
            {createListElements()}
            <button onClick={() => offset > 0 ? setOffset(offset - limit) : null}>Previous</button>
            <button onClick={() => setOffset(offset + limit)}>Next</button>
        </section>
    )
}

export default PokemonList;