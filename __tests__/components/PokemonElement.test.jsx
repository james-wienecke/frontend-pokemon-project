import {render, screen} from '@testing-library/react';
import PokemonElement from '../../components/PokemonElement';
import nock from 'nock';

describe("Pokemon Element component", () => {
    it("gets the proper name for pokemon with id of 1", async () => {
        nock("https://pokeapi.co/api/v2/")
            .get("/pokemon/1")
            .reply(200, require("../mock_json/1.json"));

        render(<PokemonElement pkmn={0} />);

        const pokemonElement = await screen.findByText(/bulbasaur/i);
        expect(pokemonElement).toBeInTheDocument();
    });

    it("gets type for pokemon with id of 1", async () => {
        nock("https://pokeapi.co/api/v2/")
            .get("/pokemon/2")
            .reply(200, require("../mock_json/2.json"));

        render(<PokemonElement pkmn={1} />);

        const pokemonElement = await screen.findByText(/grass/i);
        expect(pokemonElement).toBeInTheDocument();
    });
});