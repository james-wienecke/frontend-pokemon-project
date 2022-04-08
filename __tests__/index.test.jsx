import {render, screen} from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
    beforeEach(() => {
        render(<Home />);
    })
    
    it("renders the page heading", () => {
        const h1 = screen.getByText(/pokemon explorer/i);

        expect(h1).toBeInTheDocument();
    })

    it("renders the page footer", () => {
        const footer = screen.getByText(/james wienecke/i);

        expect(footer).toBeInTheDocument();
    })

    it("contains the PokemonList component", () => {
        const pokemonList = screen.getByTestId(/pokemon-list-container/);

        expect(pokemonList).toBeInTheDocument();
    })
})