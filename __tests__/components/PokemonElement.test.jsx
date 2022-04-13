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
});