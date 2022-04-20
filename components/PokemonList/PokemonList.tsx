import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import PokemonElement from "../PokemonElement";

function PokemonList() {

    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);

    const createListElements = () => {
        const elements = [];
        for (let i = 0; i < limit; i++) {
            if (i + offset < 898) {
                elements.push(<PokemonElement key={i} pkmn={i + offset} />);
            }
        }
        return elements;
    }

    return (
        <section data-testid="pokemon-list-container">
            {createListElements()}
            <Button onClick={() => offset > 0 ? setOffset(offset - limit) : null}>Previous</Button>
            <Button onClick={() => setOffset(offset + limit)}>Next</Button>
        </section>
    )
}

export default PokemonList;