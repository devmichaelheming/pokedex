import pokeball from "assets/pokeball.png";
import Background from "components/Background";
import Card from "components/Card";
import Header from "components/Header";
import React, { useState, useEffect, useCallback } from "react";
import api from "services/api";

import {
  Container,
  Body,
  Pokemons,
  MorePokemons,
  Loading,
  Pokeball,
} from "./styles";

interface PropsPokemon {
  name: string;
}

export function Home() {
  const LIST_INITIAL_POKEMONS = 12;
  const LIST_MAX_POKEMONS = 700;

  const [pokemonsOffset, setPokemonsOffset] = useState(LIST_INITIAL_POKEMONS);
  const [pokemons, setPokemons] = useState<PropsPokemon[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleListInitialPokemons = useCallback(async () => {
    const response = await api.get("/pokemon", {
      params: {
        limit: LIST_INITIAL_POKEMONS,
      },
    });
    setPokemons(response.data.results);
  }, []);

  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${LIST_MAX_POKEMONS}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    // Valida nomes dos pokémons constam no valor da variável pokemonSearch
    const pokemonsSearch = response.data.results.filter(
      ({ name }: PropsPokemon) => name.includes(pokemonSearch)
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  const handleMorePokemons = useCallback(
    async (offset) => {
      setIsLoading(true);
      const response = await api.get("/pokemon", {
        params: {
          limit: LIST_INITIAL_POKEMONS,
          offset,
        },
      });
      setPokemons((state) => [...state, ...response.data.results]);
      setPokemonsOffset((state) => state + LIST_INITIAL_POKEMONS);
      setIsLoading(false);
    },
    [LIST_INITIAL_POKEMONS]
  );

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) handleSearchPokemons();
    else handleListInitialPokemons();
  }, [handleListInitialPokemons, pokemonSearch, handleSearchPokemons]);

  return (
    <Container>
      <Header value={pokemonSearch} onChange={setPokemonSearch} />
      <Body>
        <Pokemons>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} />
          ))}
        </Pokemons>
        {pokemons.length > 3 ? (
          <MorePokemons>
            {pokemons.length < LIST_MAX_POKEMONS ? (
              <button
                type="button"
                onClick={() => handleMorePokemons(pokemonsOffset)}
              >
                {isLoading ? (
                  <Loading>
                    CARREGANDO
                    <Pokeball src={pokeball} />
                  </Loading>
                ) : (
                  "MOSTRAR MAIS"
                )}
              </button>
            ) : (
              <></>
            )}
          </MorePokemons>
        ) : (
          <></>
        )}
      </Body>
      <Background />
    </Container>
  );
};
