import React, { useState, useEffect, useCallback } from 'react'

import api from "../../services/api";
import {
    GeneralContainer,
    Body,
    Header,
    Logo,
    InputSearch,
    GroupInput,
    IconSearch,
    Pokemons,
    MorePokemons,
    Loading,
    Pokeball,
} from './styles';

import { Navbar, Container } from 'react-bootstrap';

import Background from "../../components/Background";
import Card from "../../components/Card";

import pokeball from "../../assets/pokeball.png";
interface PropsPokemon {
  name: string;
}

export default function Home(){
  const LIST_INITIAL_POKEMONS = 12;
  const LIST_MAX_POKEMONS = 700;

  const [pokemonsOffset, setPokemonsOffset] = useState(LIST_INITIAL_POKEMONS);
	const [pokemons, setPokemons] = useState<PropsPokemon[]>([]);  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleListInitialPokemons = useCallback(async () => {
    const response = await api.get('/pokemon', {
      params: {
        limit: LIST_INITIAL_POKEMONS,
      }
    })
    setPokemons(response.data.results);
    }, [],
  )

  const handleMorePokemons = useCallback(async (offset) => {
    setIsLoading(true);
    const response = await api.get('/pokemon', {
      params: {
        limit: LIST_INITIAL_POKEMONS,
        offset
      }
    })
    setPokemons(state => [...state, ...response.data.results]);
    setPokemonsOffset(state => state + LIST_INITIAL_POKEMONS);
    setIsLoading(false);
    },[],
  )

	useEffect(() => {
		handleListInitialPokemons();
	}, [handleListInitialPokemons])

  return (
    <GeneralContainer>
      <Header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Logo src={pokeball}/>
              POKÉDEX
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
              <GroupInput>
                <InputSearch type="search" placeholder="Pesquise aqui o seu pokemon..."/>
                <IconSearch />
              </GroupInput>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
      <Body>
        <Pokemons>
          {
            pokemons.map((pokemon, id) => (
              <Card key={id} name={pokemon.name}/>
            ))
          }
        </Pokemons>
        { pokemons.length > 3 ?
          <MorePokemons>
            {
            pokemons.length < LIST_MAX_POKEMONS
            ?
              <button
                type="button"
                onClick={() => handleMorePokemons(pokemonsOffset)}
              >
                {isLoading? (
                  <Loading>
                    CARREGANDO
                    <Pokeball src={pokeball} />
                  </Loading>
                ) : "MOSTRAR MAIS"}
              </button>
            :
            <></>
            }
          </MorePokemons>
        : <></> }
      </Body>
    <Background />
    </GeneralContainer>
  );
}