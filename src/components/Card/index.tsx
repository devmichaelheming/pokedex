import React, { useState, useEffect } from 'react';

import api from "../../services/api";

import { theme } from '../../styles/theme';

import {
  Container,
  NamePokemon,
  Avatar,
} from './styles';

type Props = {
    name: string;
}

interface pokemonTypeProps {
  name: string;
}

interface pokemonProps {
  id: string;
  name: string;
  background: string;
  avatar: string;
  types: pokemonTypeProps[];
}

export default function Card({ name }: Props){
  const [pokemon, setPokemon] = useState({} as pokemonProps);
  
  useEffect(() => {
    api.get(`/pokemon/${name}`)
    .then((response) => {
      const { id, types, sprites } = response.data;

      let backgroundColor: any = types[0].type.name;

      setPokemon({
        id,
        name: name,
        background: theme.colors.backgroundType[backgroundColor],
        avatar: sprites.other['official-artwork'].front_default,
        types: types.map((pokemonType: any) =>{
          return {
            name: pokemonType.type.name,
          }
        }),
      })
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])
  
  console.log(pokemon);

  return (
    <Container color={pokemon.background}>
      <NamePokemon>{pokemon.name}</NamePokemon>
      <Avatar src={pokemon.avatar}/>
    </Container>
  );
}