import React, { useEffect, useState } from "react";
import PokeAPI, { IPokemon } from "pokeapi-typescript";
import { Spinner } from "@chakra-ui/spinner";

function PokemonElement(props: {pkmn: number}) {
    const [pokemon, setPokemon] = useState<IPokemon>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemon = async () => {
            const res = await PokeAPI.Pokemon.fetch(props.pkmn + 1);
            return res;
        }
        getPokemon().then(res => {
            setPokemon(res)
            setLoading(false);
        }).catch(err => {
            let something = "happen";
        });
    }, [props.pkmn]);



    const displayPokemon = () => {
        const flattenPokemonTypes = () => {
            if (pokemon?.types != undefined) {
                if (pokemon.types.length > 1) {
                    const types = [];
                    for (let type of pokemon.types) {
                        types.push(type.type.name);
                    }
                    return types;
                }
            }
        }
        if (loading) {
            return <Spinner label={`Loading pokemon with id ${props.pkmn + 1}`} size="lg" />
        } else {
            return (
                <>
                    <p>{pokemon?.id} {pokemon?.name}</p>
                    <p>{flattenPokemonTypes()?.toString()}</p>
                    <img alt={pokemon?.name + " pokemon sprite image"} src={pokemon?.sprites.front_default} />
                </>
            )
        }
    }

    return (
        <div data-testid="pokemon-item">
            {displayPokemon()}
        </div>
    );
}

export default PokemonElement;