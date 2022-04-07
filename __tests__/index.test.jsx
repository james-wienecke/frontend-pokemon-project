import {render, screen} from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
    it("renders the page heading", () => {
        render(<Home/>);

        const h1 = screen.getByText("Pokemon Explorer");

        expect(h1).toBeInTheDocument();
    })
})