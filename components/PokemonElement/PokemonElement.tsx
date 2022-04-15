import React, { useEffect, useState } from "react";
import PokeAPI, { IPokemon } from "pokeapi-typescript";
import { Spinner } from "@chakra-ui/spinner";
import { Badge } from "@chakra-ui/layout";

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
        });
    }, [props.pkmn]);

    const displayPokemon = () => {
        const flattenPokemonTypes = () => {
            if (pokemon?.types != undefined) {
                if (pokemon.types.length > 0) {
                    const types = [];
                    for (let type of pokemon.types) {
                        types.push(type.type.name);
                    }
                    return types;
                }
            }
        }

        const typesToBadges = (types: string[] | undefined) => {
            const badges = [];
            if (types != undefined) {
                for (let i = 0; i < types.length; i++) {
                    badges.push(<Badge key={i}>{types[i]}</Badge>)
                }
            }
            return badges;
        }

        if (loading) {
            return <Spinner label={`Loading pokemon with id ${props.pkmn + 1}`} size="lg" />
        } else {
            return (
                <>
                    <p>{pokemon?.id} {pokemon?.name}</p>
                    {typesToBadges(flattenPokemonTypes())}
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