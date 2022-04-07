import {render, screen} from '@testing-library/react';
import PokemonList from '../../components/PokemonList';

describe("PokemonList component", () => {
    it("renders component", () => {
        render(<PokemonList />);

        const pokemonList = screen.getByTestId(/pokemon-list-container/)
        expect(pokemonList).toBeInTheDocument();
    })

})