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

        const pokemonName = () => {
            if (pokemon?.name != undefined) {
                return pokemon.name[0].toLocaleUpperCase() + pokemon.name.substr(1);
            }
        }

        const pokemonId = () => {
            if (pokemon?.id != undefined) {
                return `#${pokemon.id.toString().padStart(3, '0')}`;
            }
        }

        const pokemonTypes = () => {
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

            return typesToBadges(flattenPokemonTypes());
        }

        if (loading) {
            return <Spinner label={`Loading pokemon with id ${props.pkmn + 1}`} size="lg" />
        } else {
            return (
                <>
                    <p>{pokemonId()}</p>
                    <p>{pokemonName()}</p>
                    {pokemonTypes()}
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