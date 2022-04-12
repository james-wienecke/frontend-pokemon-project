import {render, screen} from '@testing-library/react';
import PokemonElement from '../../components/PokemonElement';
import nock from 'nock';

describe("Pokemon Element component", () => {
    it("gets the proper name for pokemon with id of 1", async () => {
        nock("GET https://pokeapi.co/api/v2/")
            .get("/pokemon/1")
            .reply(200, {
                data: {
                    abilities: [],
                    base_experience: 64,
                    forms: [
                        {
                            name: "bulbasaur",
                            url: "https://pokeapi.co/api/v2/pokemon-form/1/"
                        }
                    ],
                    game_indices: [],
                    height: 7,
                    held_items: [ ],
                    id: 1,
                    is_default: true,
                    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
                    moves: [],
                    name: "bulbasaur",
                    order: 1,
                    past_types: [ ],
                    species: {},
                    sprites: {
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                    },
                    stats: [],
                    types: [
                        {
                            slot: 1,
                            type: {
                                name: "grass",
                                url: "https://pokeapi.co/api/v2/type/12/"
                            }
                        },
                        {
                            slot: 2,
                            type: {
                                name: "poison",
                                url: "https://pokeapi.co/api/v2/type/4/"
                            }
                        }
                    ],
                    weight: 69
                }
            });

        render(<PokemonElement pkmn={0} />);

        const pokemonElement = await screen.findByText(/bulbasaur/i);
        expect(pokemonElement).toBeInTheDocument();
    });
});