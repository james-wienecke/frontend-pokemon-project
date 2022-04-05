/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import PokemonList from '../../components/PokemonList'

describe('PokemonList', () => {
    it('renders the pokemon list component', () => {
        mount(<PokemonList />)
        cy.get('#pokemon-list').should('exist')
    })

    it('displays at least one pokemon from the PokeAPI on component mount', () => {
        mount(<PokemonList />)
        cy.get('.pokemon-list-element').should('exist')
    })
})