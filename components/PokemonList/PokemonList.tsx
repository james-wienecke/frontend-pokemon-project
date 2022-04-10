import React, { useEffect, useState } from "react";

function PokemonList() {

    const [limit, setLimit] = useState(10);


    const createListElements = () => {
        const elements = [];
        for (let i = 0; i < limit; i++) {
            elements.push();
        }
    }

    return (
        <section data-testid="pokemon-list-container">
            PokemonList
        </section>
    )
}

export default PokemonList;