import {mount} from '@cypress/react'
import {PokemonList} from '../../components/PokemonList'

describe('PokemonList', () => {
    it('renders the pokemon list component', () => {
        mount(<PokemonList />)
        cy.get('#pokemon-list').should('exist')
    })
})