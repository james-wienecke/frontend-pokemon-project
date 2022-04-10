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
            PokemonList
            {createListElements()}
        </section>
    )
}

export default PokemonList;