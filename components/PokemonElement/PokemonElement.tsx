import React from "react";
import { IPokemon } from "pokeapi-typescript";

function PokemonElement(props: {pokemon: IPokemon}) {
    const pokemon = props.pokemon;

    return (
        <div data-testid="pokemon-item">
            <p>Pokemon Element</p>
        </div>
    );
}

export default PokemonElement;