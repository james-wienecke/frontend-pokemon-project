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

})