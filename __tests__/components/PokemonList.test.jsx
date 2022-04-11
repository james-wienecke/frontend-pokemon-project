import {render, screen} from '@testing-library/react';
import PokemonList from '../../components/PokemonList';

describe("PokemonList component", () => {
    it("renders component", () => {
        render(<PokemonList />);

        const pokemonList = screen.getByTestId(/pokemon-list-container/)
        expect(pokemonList).toBeInTheDocument();
    })

    it("contains PokemonItem components", () => {
        render(<PokemonList />);

        const pokemonItems = screen.getAllByTestId(/pokemon-item/);
        expect(pokemonItems).not.toBeUndefined();
    });

    it("displays loading spinner while waiting for pokeapi response", () => {
        render(<PokemonList />);

        const loadingItem = screen.getByText(/loading pokemon with id 1\b/i);
        expect(loadingItem).toBeInTheDocument();
    })

    it("starts off looking for the first few pokemon by id", async () => {
        render(<PokemonList />);

        const bulbasaurItem = await screen.findByText(/bulbasaur/i);
        expect(bulbasaurItem).toBeInTheDocument();
    })
})