import React, { useEffect, useState, useCallback } from "react";
import api from "services/api";

import {
  Container,
  SectionEvolutions,
  AvatarPokemon,
  Pokemon,
  ArrowRight,
  Background,
} from "./styles";

import {Loading} from "components/Loading";
import darkPokeball from "assets/darkPokeball.svg";

interface Props {
  name?: string;
  color: string;
}

interface familyPokemonProps {
  name: string;
  level: number;
  avatar?: string;
}

interface EvolvesProps {
  species: {
    name: string;
  };
  evolution_details: [{ min_level: number }];
  evolves_to: EvolvesProps[];
}

export function Evolution({ name, color }: Props){
  const [pokemonFamily, setPokemonFamily] = useState<familyPokemonProps[]>([]);
  const [pokemonEvolutions, setPokemonEvolutions] = useState<familyPokemonProps[]>([]);

  const handleNameSpecies = useCallback(
    ({
      species,
      evolves_to,
      evolution_details,
    }: EvolvesProps): familyPokemonProps[] => {
      let namesPokemons: familyPokemonProps[] = [
        {
          name: species.name,
          level: 0,
        },
      ];
      if (evolution_details.length)
        namesPokemons[0].level = evolution_details[0].min_level;

      evolves_to.forEach((evolves: EvolvesProps) => {
        namesPokemons = namesPokemons.concat(handleNameSpecies(evolves));
      });

      return namesPokemons;
    },
    [],
  );

  useEffect(() => {
    api.get(`/pokemon-species/${name}`).then(response => {
      const url = response.data.evolution_chain.url.split("v2")[1];

      api.get(url).then(responseEvolution => {
        const species = handleNameSpecies(responseEvolution.data.chain);
        setPokemonFamily(species);
      })
    })
  }, [name, handleNameSpecies])

  useEffect(() => {
    const urls = pokemonFamily.map(pokemon => api.get(`pokemon/${pokemon.name}`) );

    Promise.all([...urls]).then(responses => {
      const result = responses.map((response, index) => {
        const { sprites } = response.data;
        return {
          ...pokemonFamily[index],
          avatar: sprites.other["official-artwork"].front_default,
        };
      });
      setPokemonEvolutions(result);
    });
  }, [pokemonFamily])

  return (
    <Container>
      {pokemonEvolutions.length
      ? (
        <SectionEvolutions>
          {
            pokemonEvolutions.map((pokemon, id) => (
              <>
                {id !== 0 && (
                  <ArrowRight />
                )}
                <Pokemon key={id} color={color} to={`/details/${pokemon.name}`}>
                  <h3>{pokemon.name}</h3>
                  <AvatarPokemon src={pokemon.avatar}/>
                  {pokemonEvolutions.length <= 3 ? `Lvl: ${pokemon.level}` : "(Level undefined)"}
                  <Background className="background" src={darkPokeball} />
                </Pokemon>
              </>
            ))
          }
        </SectionEvolutions>
      ) : (
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Loading />
          </div>
      ) }
    </Container>
  );
}