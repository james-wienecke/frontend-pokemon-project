import {render, screen} from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
    beforeEach(() => {
        render(<Home />);
    })
    it("renders the page heading", () => {
        // render(<Home/>);

        const h1 = screen.getByText(/pokemon explorer/i);

        expect(h1).toBeInTheDocument();
    })

    it("renders the page footer", () => {
        // render(<Home />)

        const footer = screen.getByText(/james wienecke/i);

        expect(footer).toBeInTheDocument();
    })

    it("contains the PokemonList component", () => {
        // render(<Home />);

        const pokemonList = screen.getByTestId(/pokemon-list-container/);

        expect(pokemonList).toBeInTheDocument();
    })
})